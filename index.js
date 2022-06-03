document.addEventListener('DOMContentLoaded', () => {
    for (let el of document.querySelectorAll('img, iframe')) {
        let coords = el.getBoundingClientRect();
        if (((coords.y >= 0 && coords.y <= window.innerHeight) || (coords.bottom >= 0 && coords.bottom <= window.innerHeight))
            &&
            ((coords.x >= 0 && coords.x <= window.innerWidth) || (coords.right >= 0 && coords.right <= window.innerWidth))) {
            el.src = el.dataset.src;
        };
    };
});
window.addEventListener('scroll', () => {
    for (let el of document.querySelectorAll('img, iframe')) {
        let coords = el.getBoundingClientRect();
        if (((coords.y >= 0 && coords.y <= window.innerHeight) || (coords.bottom >= 0 && coords.bottom <= window.innerHeight))
            &&
            ((coords.x >= 0 && coords.x <= window.innerWidth) || (coords.right >= 0 && coords.right <= window.innerWidth))
            &&
            !el.hasAttribute('src')) {
            el.src = el.dataset.src;
        };
    };
});