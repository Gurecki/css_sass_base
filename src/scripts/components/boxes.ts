import gsap from "gsap"


(function animateBoxes() {
    gsap.to('.boxes__box:first-child', {duration: 10, translateX: 100,backgroundColor: 'pink', repeat: -1, yoyo: true, ease: 'bounce'})
})()