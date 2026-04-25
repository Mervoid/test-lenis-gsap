window.lenis = new Lenis({
    duration: 1.5,
    smoothWheel: true
});

window.lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    window.lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);