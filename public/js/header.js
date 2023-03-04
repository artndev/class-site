const burger = document.querySelector(".header__menu-burger");
const header = document.querySelector(".header__container");

const about = document.querySelector("#about");
const achievements = document.querySelector("#achievements");
const hero = document.querySelector("#hero");

const lines = Array.from(document.querySelectorAll(".line"));
     

burger.addEventListener("click", () => {
    if (header.classList.contains("hide")) {
        gsap.timeline({onComplete: () => {
            document.body.style.overflow = "hidden";
            header.classList.remove("hide");
        }})
            .to(header, {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "translateX(0%)",
                backgroundColor: "rgba(0, 0, 0, 0.8)"
            })
            .to(lines[1], {
                duration: 0.5,
                ease: "power1.inOut",
                opacity: 0
            }, "<")
            .to(lines[0], {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "rotate(50deg) translateY(-18px) translateX(40px)"
            }, "<<")
            .to(lines[2], {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "rotate(-50deg) translateY(24px) translateX(-50px)"
            }, "<<<")
    }
    else {
        gsap.timeline({onComplete: () => {
            document.body.style.overflow = "visible";
            header.classList.add("hide");
        }})
            .to(header, {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "translateX(80%)",
                backgroundColor: "rgba(0, 0, 0, 0)"
            })
            .to(lines[1], {
                duration: 0.5,
                ease: "power1.inOut",
                opacity: 1
            }, "<")
            .to(lines[0], {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "rotate(0deg) translateY(0px) translateX(0px)"
            }, "<<")
            .to(lines[2], {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "rotate(0deg) translateY(0px) translateX(0px)"
            }, "<<<")
     }
})

about.addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: !(screen.availWidth <= 460)
            ? {y: "#about__section", offsetY: 100}
            : "#about__section"
    });

    if(screen.availWidth <= 460) {
        gsap.timeline({onComplete: () => {
            document.body.style.overflow = "visible";
            header.classList.add("hide");
        }})
            .to(header, {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "translateX(80%)",
                backgroundColor: "rgba(0, 0, 0, 0)"
            })
            .to(lines[1], {
                duration: 0.5,
                ease: "power1.inOut",
                opacity: 1
            }, "<")
            .to(lines[0], {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "rotate(0deg) translateY(0px) translateX(0px)"
            }, "<<")
            .to(lines[2], {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "rotate(0deg) translateY(0px) translateX(0px)"
            }, "<<<")
    }
})


achievements.addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: "#achievements__section"
    });

    if(screen.availWidth <= 460) {
        gsap.timeline({onComplete: () => {
            document.body.style.overflow = "visible";
            header.classList.add("hide");
        }})
            .to(header, {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "translateX(80%)",
                backgroundColor: "rgba(0, 0, 0, 0)"
            })
            .to(lines[1], {
                duration: 0.5,
                ease: "power1.inOut",
                opacity: 1
            }, "<")
            .to(lines[0], {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "rotate(0deg) translateY(0px) translateX(0px)"
            }, "<<")
            .to(lines[2], {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "rotate(0deg) translateY(0px) translateX(0px)"
            }, "<<<")
    }
})

hero.addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: !(screen.availWidth <= 460)
            ? {y: "#hero__section", offsetY: 100}
            : "#hero__section"
    });

    if(screen.availWidth <= 460) {
        gsap.timeline({onComplete: () => {
            document.body.style.overflow = "visible";
            header.classList.add("hide");
        }})
            .to(header, {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "translateX(80%)",
                backgroundColor: "rgba(0, 0, 0, 0)"
            })
            .to(lines[1], {
                duration: 0.5,
                ease: "power1.inOut",
                opacity: 1
            }, "<")
            .to(lines[0], {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "rotate(0deg) translateY(0px) translateX(0px)"
            }, "<<")
            .to(lines[2], {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "rotate(0deg) translateY(0px) translateX(0px)"
            }, "<<<")
    }
})