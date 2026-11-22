const container2 = document.getElementById("container2")

let tl = gsap.timeline();
let tlContact;
let isOpenContact = false;

var navLock = false

/* Nav hover react animation */
var navs = document.querySelectorAll(".nav-index");

function navHover() {
    navs.forEach(function(nav){
        var tickBox = nav.querySelector(".tickBox")
        var btn = nav.querySelector("a")

        btn.addEventListener("mousemove", () => {
            gsap.to(tickBox, {
                rotation: 90,
                duration: 1,
                overwrite: true,
                ease: "expo.out",
            })
        })

        btn.addEventListener("mouseleave", () => {
            gsap.to(tickBox, {
                rotation: -90,
                duration: 1,
                overwrite: true,
                ease: "expo.out",
            })
        })
    })
}

/* ── magnetic Stars ── */
var zones = document.querySelectorAll(".mag-zone");
var strength = 0.4;
var labelStrength = 0.24;

function magStar() {
    zones.forEach(function(zone) {
        var btn = zone.querySelector(".mag-btn");

        // no wiggle — simply overwriting x and y. 
        zone.addEventListener("mousemove", (e) => {
            const rect = zone.getBoundingClientRect();
            const x = gsap.utils.mapRange(rect.left, rect.right,-rect.width / 2, rect.width / 2, e.clientX);
            const y = gsap.utils.mapRange(rect.top, rect.bottom,-rect.height / 2, rect.height / 2, e.clientY);

            gsap.to(btn, {
                x: x * strength,
                y: y * strength,
                duration: 0.4,
                ease: "power2.out",
                overwrite: true
            });
        });

        zone.addEventListener("mouseleave", () => {
            gsap.to(btn, { 
                x: 0, 
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.4)",
                overwrite: true
            });
        });
    });
}

tl.  fromTo(".nav-index",{
        x: -15,
        opacity:0
    },{
        opacity: 1,
        stagger: 0.5,
        duration: 1,
        x:0,
    }, "0.5")
    .fromTo(".tickBox",{
        x: -15,
        opacity:0,
    },{
        opacity: 1,
        stagger: 0.5,
        duration: 1,
        x:0,
        onComplete: () => {navHover()}
    }, "0.7")
    .fromTo(".subTitle", {
        x: -50,
        opacity: 0
    },{
        duration: 1,
        x: 0,
        opacity:1,
    }, "0.5")
    .fromTo(".title",{
        x: -15,
        opacity:0
    },{
        opacity: 1,
        stagger: 0.5,
        duration: 1,
        x:0
    }, "0.8")
    .fromTo(".stars.point8", {
        opacity: 0,
        x: -100,
    },{
        opacity: 1,
        duration: 0.6,
        rotation: 360,
        x:0
    }, "1")
    .fromTo(".stars.point7", {
        opacity: 0,
        x: -100,
    },{
        opacity: 1,
        rotation: 360,
        x:0
    }, "1.3")
    .fromTo(".stars.point9", {
        opacity: 0,
        x: -100,
    },{
        opacity: 1,
        duration: 1,
        rotation: 360,
        x:0,
    }, "1.5")
    // .fromTo(".footer-p",{
    //     y: -10,
    //     opacity:0
    // },{
    //     opacity: 1,
    //     stagger: 0.5,
    //     duration: 1,
    //     y:0
    // })
    .fromTo(".stripe1", {
        rotation: 50,
        /* Fully clipped out from top to bottom (100% top inset = invisible) */
        clipPath: "inset(100% 0% 0% 0% round 9999px)"
    },{
        duration: 4,
        stagger: 0.5,
        /* Completely unclipped (0% inset = full length) */
        clipPath: "inset(-50% 0% -50% 0% round 9999px)",
        ease: "power2.in"
    }, "-0.5")
    .fromTo(".portfolioTitle", {
        rotation: -40,
        x: 200,
        y: -160,
        opacity:0
    },{
        opacity: 1,
        duration: 1,
        x: 0,
        y: 0,
        ease: "back.out"
    })
    .fromTo(".spinningTitleStar", {
        opacity: 0,
        right: "0%"
    },{
        opacity: 1,
        rotation: 360,
        right: "-12%",
        ease: "back.out"
    })
    .fromTo(".mag-btn", {
        opacity:0,
        rotation: 180,
        x: 100,
        y: -100,
    },{
        rotation: 30*Math.random(),
        x: 0,
        y: 0,
        duration: 0.5,
        stagger: 0.5,
        opacity:1,
        ease: "power3.out",
        onComplete: () => {magStar()}
    }, "7") 

/* Stars */
gsap.to(".spinningTitleStar", {
    duration: 2,
    rotation: 360,
    ease:Linear.easeNone,
    repeat:-1 
})

gsap.set(".contactsWrapper", {visibility:"hidden"});
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
    console.log("FFNFF")
    if (isOpenContact){
        tlContact.timeScale(1).play();
    } else {
        tlContact.timeScale(1.5).reverse();
    }
}

document.getElementById("contactButtonMenu").addEventListener("click", toggleContact);
document.querySelector(".contact-bg").addEventListener("click", () => {
    if (isOpenContact) toggleContact();
});