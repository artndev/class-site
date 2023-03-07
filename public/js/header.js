document.addEventListener("DOMContentLoaded", () => {
    // ? Header
    const header = document.querySelector( ".header__container" );

    // ? Sections
    const about = document.querySelector( "#about" );
    const achievements = document.querySelector( "#achievements" );
    const hero = document.querySelector( "#hero" );

    // ? Burger && lines of burger
    const burger = document.querySelector( ".header__menu-burger" );
    const lines = Array.from( document.querySelectorAll(".line") );

    
    function openHeader() {
        gsap.timeline({onComplete: () => {
            $( "body" ).css( "overflow", "hidden" );
            header.classList.remove( "hide" );
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
            }, "<")
            .to(lines[2], {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "rotate(-50deg) translateY(24px) translateX(-50px)"
            }, "<");
    }
    
    function closeHeader() {
        gsap.timeline({onComplete: () => {
            $( "body" ).css( "overflow", "visible" );
            header.classList.add( "hide" );
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
            }, "<")
            .to(lines[2], {
                duration: 0.5,
                ease: "power1.inOut",
                transform: "rotate(0deg) translateY(0px) translateX(0px)"
            }, "<");
    }
    
    function scroll(tag) {
        gsap.to(window, {
            duration: 0.5,
            scrollTo: screen.availWidth <= 460
                ? { y: tag }
                : { y: tag, offsetY: 100 },
            onComplete: function () {
                if (Object.keys( this.vars.scrollTo ).length === 1) {
                    closeHeader();
                }
            }
        });
    }
    
    
    burger.addEventListener("click", () => {
        if (header.classList.contains( "hide" )) { 
            openHeader(); 
        }
        else { 
            closeHeader(); 
        }
    });
    
    
    about.addEventListener("click", () => scroll( "#about__section" ));
    
    achievements.addEventListener("click", () => scroll( "#achievements__section" ));
    
    hero.addEventListener("click", () => scroll( "#hero__section" ));
});