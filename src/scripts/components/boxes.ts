import gsap from "gsap"


(function animateBoxes() {
    gsap.to('.boxes__box', {duration: 0.5, translateX: 'random(200, 600)',backgroundColor: 'pink', repeat: -1, yoyo: true, ease: 'ease', stagger: 0.1})
})()