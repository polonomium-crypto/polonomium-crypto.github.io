var stars = document.querySelectorAll(".stars")
const menuTogg = document.getElementById("menuToggle")
let isOpen = false;
let isOpenContact = false;
let tl;
let tlContact;
let enterEndTime = 0;


stars.forEach(function(star){

    var tween = gsap.to(star, {
        rotation: 90,
        duration: 1,
        overwrite: true,
        ease: "expo.out",
        paused: true,
    })

    star.addEventListener("mouseenter", () => {
        // tween.play()
        tween.restart()
    })

    star.addEventListener("mouseleave", () => {
        //tween.restart()
        /*
        gsap.to(star, {
            rotation: -90,
            duration: 1,
            overwrite: true,
            ease: "expo.out",
        })*/
    })
})



function init(){
    gsap.set(".nav", {visibility:"hidden"});
    gsap.set(".contactsWrapper", {visibility:"hidden"});

    tl = gsap
        .timeline({paused:true})

        .set(".nav-panel", {visibility:"visible", x: "110%"})
        .set(".nav-bg", {visibility:"visible", opacity: 0})
        .set(".nav-item", {x: "0%", y: "100%",rotation:"50deg"})
        .set(".nav-stars", {scale: 0, rotate: "-30deg"})
        .to(
            ".nav-panel",
            {
                duration:0.6,
                x: "0%",
                ease: "power3.out"
            },
            0
        )
        .to(
            ".nav-bg",
            {
                duration:0.6,
                opacity:1,
            },
            0
        )
        .to(
            ".nav-item",
            {
                duration: 0.6,
                x: 0,
                y: 0,
                rotation: "0deg",
                stagger: 0.1,
                ease: "power3.out",
            },
            0
        )
        .to(
            ".nav-stars",
            {
                duration: 0.6,
                stagger: 0.1,
                scale: 1,
                rotate: "0deg",
                ease: "power3.out",
            },
            0.1
        )

        // Pause so animation is dynamic for when pressed before the animation is finished or not.
        .addPause();
        enterEndTime = tl.duration();

        // tl
        //     .to(
        //         ".nav-stars", {
        //             duration: 1,
        //             x: "110dvw",
        //             stagger: 0.05,
        //             ease: "power3.in",
        //         },
        //         "<"
        //     )
        //     .to(
        //         ".nav-panel", {
        //             duration: 0.6,
        //             x: "110%",
        //             ease: "power3.out",
        //         },
        //         "<1"
        //     )
        //     .to(
        //         ".nav-item", {
        //             duration: 0.6,
        //             x: 0,
        //             y: "100%",
        //             rotation: "50deg",
        //             stagger: 0.1,
        //             ease: "power3.out",
        //         },
        //         "<-0.5"
        //     )
        //     .to(
        //         ".nav-bg",
        //         {
        //             duration:0.6,
        //             opacity:0,
        //         },
        //         "<"
        //     )

    tlContact = gsap
        .timeline({paused:true})
        .set(".contactsWrapper", {visibility:"visible"})
        .fromTo(
            ".contactPaper", {
                opacity: 0,
                scale: 1.5,
            }, {
                duration: 1,
                opacity: 1,
                rotate: "-10deg",
                scale: 1,
                ease: "power2.in"
            },
            0.3
        )
        .fromTo(
            ".contact-bg", {
                opacity: 0,
            }, {
                opacity: 1,
            },
            0
        )
}
init();

function toggle() {
    isOpen = !isOpen;

    // if (isOpen){
    //     if (tl.time() >= enterEndTime){
    //         tl.restart();
    //     } else {
    //         tl.play();
    //     }
    // } else {
    //     if (tl.time() < enterEndTime){
    //         tl.reverse();
    //     } else {
    //         tl.play();
    //     }
    // }

    if (isOpen){
        tl.timeScale(1).play();
    } else {
        tl.timeScale(2).reverse();
    }
}

function menuHover() {
    gsap.to(
        menuTogg, {
            duration: 0.3,
            scale: 1.2,
        }
    )
}

function menuHoverLeave() {
    gsap.to(
        menuTogg, {
            duration: 0.3,
            scale: 1,
        }
    )
}

function menuToggleClickFX() {
    gsap.fromTo(
        menuTogg, {
            duration: 0.3,
            scale: 0.8,
        }, {
            scale: 1.3,
            ease: "bounce.out",
        }
    )
}

// let strength = 0.1;
// document.querySelectorAll(".nav-wrapper").forEach(function(zone){
//     let btn = zone.querySelector(".nav-item")
//     zone.addEventListener("mousemove", (e) => {
//     const rect = zone.getBoundingClientRect();
//     const x = gsap.utils.mapRange(rect.left, rect.right,-rect.width / 2, rect.width / 2, e.clientX);
//     const y = gsap.utils.mapRange(rect.top, rect.bottom, -rect.height / 2, rect.height / 2, e.clientY);

//     gsap.to(btn, {
//         x: x * strength,
//         y: y * strength,
//         duration: 0.4,
//         ease: "power2.out",
//         overwrite: "auto"
//     });
//     });

//     zone.addEventListener("mouseleave", () => {
//     gsap.to(btn, { x: 0, y: 0,
//         duration: 0.7,
//         ease: "elastic.out(1, 0.4)",
//         overwrite: "auto"
//     });
//     // wiggle is still running
//     });
// });

menuTogg.addEventListener("click", toggle);
menuTogg.addEventListener("click", menuToggleClickFX);
menuTogg.addEventListener("mouseenter", menuHover);
menuTogg.addEventListener("mouseleave", menuHoverLeave);
document.querySelector(".nav-bg").addEventListener("click", () => {
    if (isOpen) toggle();
});


// Contact stuff
const contactButtonMenu = document.getElementById("contactButtonMenu");
const contactButtons = document.querySelectorAll(".button.contacts")

function discordButton() {
  // Get the text field
  var copyText = document.getElementById("discordButton");

  // Copy the text inside the text field
  navigator.clipboard.writeText("wants_wisdom");
  
  // Alert the copied text
  alert("Copied the text: wants_wisdom");
}

function emailButton() {
  // Get the text field
  var copyText = document.getElementById("emailButton");

  // Copy the text inside the text field
  navigator.clipboard.writeText("polonomium@gmail.com");
  
  // Alert the copied text
  alert("Copied the text: polonomium@gmail.com");
}

function toggleContact() {
    isOpenContact = !isOpenContact;

    // if (isOpen){
    //     if (tl.time() >= enterEndTime){
    //         tl.restart();
    //     } else {
    //         tl.play();
    //     }
    // } else {
    //     if (tl.time() < enterEndTime){
    //         tl.reverse();
    //     } else {
    //         tl.play();
    //     }
    // }

    if (isOpenContact){
        tlContact.timeScale(1).play();
    } else {
        tlContact.timeScale(1.5).reverse();
    }
}

contactButtonMenu.addEventListener("click", toggleContact);
contactButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleContact();
  });
});
document.querySelector(".contact-bg").addEventListener("click", () => {
    if (isOpenContact) toggleContact();
});