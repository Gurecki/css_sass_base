
(function handleNaviScrolling() {
    const linkToAboutUs = document.getElementById('link-to-about-us');
    const aboutUsHeading = document.getElementById('about-us');

    linkToAboutUs.addEventListener('click', (e) => {
        aboutUsHeading.scrollIntoView({behavior: 'smooth'});
        console.log('in');
        e.preventDefault();
        e.stopPropagation();
    })

})()