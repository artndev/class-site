document.addEventListener("DOMContentLoaded", () => {
    gsap.timeline({stagger: 0.1})
        .fromTo(".hero__logo", {
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
        .fromTo(".hero__desc", {
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
        .fromTo(".arrow", {
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
        .fromTo(".arrow", {
            duration: 1,
            ease: "power1.inOut",
            y: "-10"
        }, {
            duration: 1,
            ease: "power1.inOut",
            y: "10"
        })
})

$(".arrow").click(() => {
    gsap.to(window, {
        duration: 1,
        scrollTo: "#about__section"
    })
})