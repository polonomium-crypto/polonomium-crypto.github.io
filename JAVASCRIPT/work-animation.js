const topFrame = document.getElementById("topFrame");
const bottomFrame = document.getElementById("bottomFrame");
const titleStars = document.querySelector(".titleWrapper1").querySelectorAll(".stars");

let tween = gsap
    .timeline({paused: false})
    .fromTo(".frontCurtainsWrapper", {
        x: 0
    },{
        duration: 2,
        xPercent: -100,
        ease: "power3.inOut"
    },
    0
    )
    .fromTo(topFrame, {
        y: -70,
    },{
        duration: 2,
        y: 0
    },
    1
    )
    .fromTo(bottomFrame, {
        y: 70,
    },{
        duration: 2,
        y: 0
    },
    1
    )
    .fromTo(".midCurtainsWrapper",{
        xPercent: -100,
    }, {
        duration:2,
        x: 400,
        ease: "power3.out",
    },
    1.5
    )
    .fromTo(".rect0",{
        x:500,
    }, {
        duration:2,
        x: 0,
        ease: "power3.out",
    },
    0.8
    )
    .fromTo(titleStars ,{
        scale: 0,
        rotate: -40,
    }, {
        duration:2,
        stagger: 0.2,
        scale: 1,
        rotate: 0,
        ease: "power3.out",
    },
    2.5
    )
    .fromTo(".title",{
        y: -100,
        opacity: 0,
    }, {
        duration: 2,
        y: 0,
        opacity: 1,
        ease: "power3.out"
    },
    1
    )
    .fromTo(".indexWrapper1",{
        visibility: "visible",
        x: 100,
        opacity: 0,
    }, {
        duration: 2,
        stagger: 0.5,
        x: 0,
        opacity: 1,
        ease: "power3.out"
    },
    1.4
    )

// Subs
const subTitleStars = document.querySelector(".subTitleWrapper1").querySelectorAll(".stars");

gsap.fromTo(subTitleStars, {
    scale: 0,
    rotate: -40,
}, {
    scrollTrigger: subTitleStars,
    duration:2,
    stagger: 0.2,
    scale: 1,
    rotate: 0,
    ease: "power3.out",
});