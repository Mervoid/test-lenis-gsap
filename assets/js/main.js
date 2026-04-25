gsap.registerPlugin(ScrollTrigger);

// 1. Efecto Parallax en el Hero
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-parallax",
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true
    }
});

tl.to(".bg", {
    scale: 1.25,
    ease: "none"
}, 0)
.to(".l1", {
    yPercent: -20,
    ease: "none"
}, 0)
.to(".l2", {
    yPercent: -40,
    ease: "none"
}, 0)
.to(".hero-overlay-text", {
    yPercent: -60,
    opacity: 0,
    ease: "none"
}, 0);

// 2. Animación de carta de invitación (Estrictamente GSAP)
gsap.to(".invitation-card", {
    scrollTrigger: {
        trigger: ".content-reveal",
        start: "top 75%",
    },
    y: 0,
    opacity: 1,
    duration: 1.8,
    ease: "power3.out"
});

// 3. Galería de Scroll Horizontal
// Entrada del título animada con GSAP
gsap.fromTo(".horizontal-gallery-title h2, .horizontal-gallery-title p",
    { y: 30, opacity: 0 },
    {
        scrollTrigger: {
            trigger: ".horizontal-gallery-wrapper",
            start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out"
    }
);

const galleryContainer = document.querySelector(".horizontal-gallery");

if (galleryContainer) {
    // Scroll horizontal vinculado estricto a ScrollTrigger
    let scrollTween = gsap.to(galleryContainer, {
        x: () => -(galleryContainer.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-gallery-wrapper",
            pin: true,
            scrub: 1,
            end: () => "+=" + galleryContainer.scrollWidth
        }
    });

    // Parallax interno de las imágenes vinculado a la galería (puramente GSAP)
    gsap.utils.toArray('.gallery-item img').forEach((img) => {
        gsap.fromTo(img, 
            { x: "-15%" },
            {
                x: "15%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".horizontal-gallery-wrapper",
                    start: "top top",
                    end: () => "+=" + galleryContainer.scrollWidth,
                    scrub: 1
                }
            }
        );
    });
}