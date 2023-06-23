gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
});

gsap.fromTo('.hero-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'center',
        end: '1000',
        scrub: true
    }
});

let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');
itemsL.forEach(item => {
    gsap.fromTo(item,
        { x: -250, opacity: 0 }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-800',
            end: '-450',
            scrub: true
        }
    });
});

let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');
itemsR.forEach(item => {
    gsap.fromTo(item,
        { x: 250, opacity: 0 }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-800',
            end: '-450',
            scrub: true
        }
    });
});
