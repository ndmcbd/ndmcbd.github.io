import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TileView from './tileView';
import Cell from './cell';
import { GameOver } from './gameOver';
import "./2048.main.css";

class Tile {
  static id = 0;

  constructor(value = 0, row = -1, column = -1) {
    this.value = value;
    this.row = row;
    this.column = column;
    this.oldRow = -1;
    this.oldColumn = -1;
    this.markForDeletion = false;
    this.mergedInto = null;
    this.id = Tile.id++;
  }

  moveTo(row, column) {
    this.oldRow = this.row;
    this.oldColumn = this.column;
    this.row = row;
    this.column = column;
  }

  isNew() {
    return this.oldRow === -1 && !this.mergedInto;
  }

  hasMoved() {
    return (
      (this.fromRow() !== -1 &&
        (this.fromRow() !== this.toRow() ||
          this.fromColumn() !== this.toColumn())) ||
      this.mergedInto
    );
  }

  fromRow() {
    return this.mergedInto ? this.row : this.oldRow;
  }

  fromColumn() {
    return this.mergedInto ? this.column : this.oldColumn;
  }

  toRow() {
    return this.mergedInto ? this.mergedInto.row : this.row;
  }

  toColumn() {
    return this.mergedInto ? this.mergedInto.column : this.column;
  }
}

class Board {
  static size = 4;
  static fourProbability = 0.1;
  static deltaX = [-1, 0, 1, 0];
  static deltaY = [0, -1, 0, 1];

  constructor() {
    this.tiles = [];
    this.cells = Array(Board.size)
      .fill(null)
      .map(() => Array(Board.size).fill(null));
    for (let i = 0; i < Board.size; ++i) {
      for (let j = 0; j < Board.size; ++j) {
        this.cells[i][j] = this.addTile();
      }
    }
    this.addRandomTile();
    this.setPositions();
    this.won = false;
  }

  addTile(value, row, column) {
    const res = new Tile(value, row, column);
    this.tiles.push(res);
    return res;
  }

  moveLeft() {
    let hasChanged = false;
    for (let row = 0; row < Board.size; ++row) {
      const currentRow = this.cells[row].filter((tile) => tile.value !== 0);
      const resultRow = [];
      for (let target = 0; target < Board.size; ++target) {
        let targetTile =
          currentRow.length > 0 ? currentRow.shift() : this.addTile();
        if (
          currentRow.length > 0 &&
          currentRow[0].value === targetTile.value
        ) {
          const tile1 = targetTile;
          targetTile = this.addTile(targetTile.value);
          tile1.mergedInto = targetTile;
          const tile2 = currentRow.shift();
          tile2.mergedInto = targetTile;
          targetTile.value += tile2.value;
        }
        resultRow[target] = targetTile;
        this.won |= targetTile.value === 2048;
        hasChanged |= targetTile.value !== this.cells[row][target].value;
      }
      this.cells[row] = resultRow;
    }
    return hasChanged;
  }

  setPositions() {
    this.cells.forEach((row, rowIndex) => {
      row.forEach((tile, columnIndex) => {
        tile.oldRow = tile.row;
        tile.oldColumn = tile.column;
        tile.row = rowIndex;
        tile.column = columnIndex;
        tile.markForDeletion = false;
      });
    });
  }

  addRandomTile() {
    const emptyCells = [];
    for (let r = 0; r < Board.size; ++r) {
      for (let c = 0; c < Board.size; ++c) {
        if (this.cells[r][c].value === 0) {
          emptyCells.push({ r, c });
        }
      }
    }
    const index = Math.floor(Math.random() * emptyCells.length);
    const cell = emptyCells[index];
    const newValue = Math.random() < Board.fourProbability ? 4 : 2;
    this.cells[cell.r][cell.c] = this.addTile(newValue);
  }

  move(direction) {
    this.clearOldTiles();
    for (let i = 0; i < direction; ++i) {
      this.cells = rotateLeft(this.cells);
    }
    const hasChanged = this.moveLeft();
    for (let j = direction; j < 4; ++j) {
      this.cells = rotateLeft(this.cells);
    }
    if (hasChanged) {
      this.addRandomTile();
    }
    this.setPositions();
    return this;
  }

  clearOldTiles() {
    this.tiles = this.tiles.filter((tile) => !tile.markForDeletion);
    this.tiles.forEach((tile) => {
      tile.markForDeletion = true;
    });
  }

  hasWon() {
    return this.won;
  }

  hasLost() {
    let canMove = false;
    for (let row = 0; row < Board.size; ++row) {
      for (let column = 0; column < Board.size; ++column) {
        canMove |= this.cells[row][column].value === 0;
        for (let dir = 0; dir < 4; ++dir) {
          const newRow = row + Board.deltaX[dir];
          const newColumn = column + Board.deltaY[dir];
          if (
            newRow < 0 ||
            newRow >= Board.size ||
            newColumn < 0 ||
            newColumn >= Board.size
          ) {
            continue;
          }
          canMove |=
            this.cells[row][column].value ===
            this.cells[newRow][newColumn].value;
        }
      }
    }
    return !canMove;
  }
}

const rotateLeft = (matrix) => {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const res = [];
  for (let row = 0; row < rows; ++row) {
    res.push([]);
    for (let column = 0; column < columns; ++column) {
      res[row][column] = matrix[column][columns - row - 1];
    }
  }
  return res;
};

export default class MainBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { board: new Board() };
  }

  restartGame() {
    this.setState({ board: new Board() });
  }

  handleKeyDown = (event) => {
    if (this.state.board.hasWon()) {
      return;
    }
    if (event.keyCode >= 37 && event.keyCode <= 40) {
      event.preventDefault();
      const direction = event.keyCode - 37;
      this.setState({ board: this.state.board.move(direction) });
    }
  };

  handleTouchStart = (event) => {
    if (this.state.board.hasWon()) {
      return;
    }
    if (event.touches.length !== 1) {
      return;
    }
    this.startX = event.touches[0].screenX;
    this.startY = event.touches[0].screenY;
    event.preventDefault();
  };

  handleTouchEnd = (event) => {
    if (this.state.board.hasWon()) {
      return;
    }
    if (event.changedTouches.length !== 1) {
      return;
    }
    const deltaX = event.changedTouches[0].screenX - this.startX;
    const deltaY = event.changedTouches[0].screenY - this.startY;
    let direction = -1;
    if (
      Math.abs(deltaX) > 3 * Math.abs(deltaY) &&
      Math.abs(deltaX) > 30
    ) {
      direction = deltaX > 0 ? 2 : 0;
    } else if (
      Math.abs(deltaY) > 3 * Math.abs(deltaX) &&
      Math.abs(deltaY) > 30
    ) {
      direction = deltaY > 0 ? 3 : 1;
    }
    if (direction !== -1) {
      this.setState({ board: this.state.board.move(direction) });
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const cells = this.state.board.cells.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.map((_, columnIndex) => (
          <Cell key={rowIndex * Board.size + columnIndex} />
        ))}
      </div>
    ));

    const tiles = this.state.board.tiles
      .filter((tile) => tile.value !== 0)
      .map((tile) => <TileView tile={tile} key={tile.id} />);

    return (
        <div>
             <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"
            />
            <section className="sec_tit">
                <div className="header">
                    <h1 className="ektuUpore">2048 </h1>
                </div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link tabIndex="-1" to="../">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <Link tabIndex="-1" to="../2048/">
                            Games
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        2048
                    </li>
                </ol>
            </section>
            
      <div
        className=' align-middle board position-absolute '
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        tabIndex='1'
      >
       
       
        {cells}
        {tiles}
        <GameOver
          board={this.state.board}
          onRestart={this.restartGame.bind(this)}
        />
      </div>
      </div>
    );
  }
}
