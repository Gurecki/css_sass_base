import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
(function animateBoxes() {

    gsap.registerPlugin(ScrollTrigger);
    // const tween = gsap.to('.boxes__box', {duration: 0.5, translateX: 'random(200, 600)',backgroundColor: 'pink', repeat: -1, yoyo: true, ease: 'ease', stagger: 0.1})

    const tl = gsap.timeline(
        { 
            scrollTrigger: {
                trigger: '.boxes__box:first-child',
                start: 'top center',
                markers: true,
                scrub: true,
                toggleClass: 'my-class'
            },
            yoyo: true,
        }
        );
    tl.to('.boxes__box', {duration: 1, translateX: 'random(200, 600)', ease: 'ease', 
});
    // tl.to('.boxes__box:first-child', {backgroundColor: 'blue'});
})()