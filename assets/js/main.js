gsap.registerPlugin(ScrollTrigger);

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