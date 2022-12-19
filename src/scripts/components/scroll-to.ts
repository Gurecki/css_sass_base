
(function handleScrollTo() {

    const links = document.querySelectorAll('.scroll-to');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const elementToBeScrolledId = document.querySelector(
                link.getAttribute('scroll-to')
            );
            if(elementToBeScrolledId) {
                elementToBeScrolledId.scrollIntoView({behavior: "smooth"});
                e.preventDefault();
                e.stopPropagation();
            }
        })
    })
})()