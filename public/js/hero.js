const hero_logo = document.querySelector(".hero__logo");
const hero_desc = document.querySelector(".hero__desc");
const next_arrow = document.querySelector(".arrow");


document.addEventListener("DOMContentLoaded", () => {
    gsap.timeline({stagger: 0.1})
        .fromTo(hero_logo, {
            duration: 1,
            ease: "power1.inOut",
            transform: "translateX(-100%)",
            opacity: 0
        }, {
            duration: 1,
            ease: "power1.inOut",
            transform: "translateX(0%)",
            opacity: 1
        })
        .fromTo(hero_desc, {
            duration: 1,
            ease: "power1.inOut",
            transform: "translateY(-100%)",
            opacity: 0
        }, {
            duration: 1,
            ease: "power1.inOut",
            transform: "translateX(0%)",
            opacity: 1
        })
        .fromTo(next_arrow, {
            duration: 1,
            ease: "power1.inOut",
            transform: "translateY(-100%)",
            opacity: 0
        }, {
            duration: 1,
            ease: "power1.inOut",
            transform: "translateX(0%)",
            opacity: 1
        })
    gsap.timeline({yoyo: true, repeat: -1}) 
        .fromTo(next_arrow, {
            duration: 1,
            ease: "power1.inOut",
            y: "-10"
        }, {
            duration: 1,
            ease: "power1.inOut",
            y: "10"
        })
})

