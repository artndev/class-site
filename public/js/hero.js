document.addEventListener("DOMContentLoaded", () => {
    // ? Arrow
    const arrow = document.querySelector( ".arrow" );

    // ? Hero nodes
    const hero = document.querySelector( "#hero" );
    const hero_logo = document.querySelector( ".hero__logo" );
    const hero_desc = document.querySelector( ".hero__desc" );

    // ? Burger && lines of burger
    const burger = document.querySelector( ".header__menu-burger" );
    const lines = Array.from( document.querySelectorAll(".line") );


    gsap.timeline({ stagger: 0.1 })
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
        .fromTo(arrow, {
            duration: 1,
            ease: "power1.inOut",
            transform: "translateY(-100%)",
            opacity: 0
        }, {
            duration: 1,
            ease: "power1.inOut",
            transform: "translateY(0%)",
            opacity: 1
        });

        gsap.timeline({ yoyo: true, repeat: -1 }) 
            .fromTo(arrow, {
                duration: 1,
                ease: "power1.inOut",
                y: "-10"
            }, {
                duration: 1,
                ease: "power1.inOut",
                y: "10"
            });

            
        arrow.addEventListener("click", () => {
            gsap.to(window, {
                duration: 0.5,
                scrollTo: screen.availWidth <= 460
                    ? { y: "#about__section" }
                    : { y: "#about__section", offsetY: 100 },
                onComplete: function () {
                    if (Object.keys( this.vars.scrollTo ).length === 1) {
                        closeHeader();
                    }
                }
            });
        });
});
