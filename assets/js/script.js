gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach(section => {
    gsap.fromTo(section, {}, {
        y: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "100px bottom",
            end: "+=100",
            scrub: true
        }
    });
});

function ifsingledigit(value) {
    return value < 10 ? "0" : "";
}

gsap.from(".animCounter", {
    textContent: "0",
    duration: 1,
    ease: "power1.inOut",
    modifiers: {
        textContent: value => ifsingledigit(value) + formatNumber(value, 0)
    },
    scrollTrigger: {
        trigger: "#counter_sec",
        start: "0px 80%",
        end: "+=500",
        toggleActions: "play none none reverse",
        markers: false
    }
});

gsap.from(".animCounterwp", {
    textContent: "0",
    duration: 1,
    ease: "power1.inOut",
    modifiers: {
        textContent: value => formatNumber(value, 0) + "+"
    },
    scrollTrigger: {
        trigger: "#counter_sec",
        start: "0px 80%",
        end: "+=500",
        toggleActions: "play none none reverse",
        markers: false
    }
});

function formatNumber(value, decimals) {
    let s = (+value).toLocaleString('en-US').split(".");
    return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
}

$(document).scroll(function() {
    if($(window).scrollTop() > 0) {
        $('nav').css({
            'background' : '#14141a',
        });
    }
    else {
        $('nav').css({
            'background' : 'transparent'
        });
    }
});

$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.goto').toggleClass('open');
        $('.goto li').toggleClass('fade');
        $('.hamburger').toggleClass('toggle');
    });
}
);


