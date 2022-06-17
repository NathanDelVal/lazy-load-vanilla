document.addEventListener('DOMContentLoaded', () => {
    for (let el of document.querySelectorAll('img, iframe')) {
        let coords = el.getBoundingClientRect();
        if (((coords.y >= 0 && coords.y <= window.innerHeight) || (coords.bottom >= 0 && coords.bottom <= window.innerHeight))
            &&
            el.hasAttribute('data-src')
            &&
            !el.hasAttribute('src')) {
            el.src = el.dataset.src;
        };
    };
});
window.addEventListener('scroll', () => {
    for (let el of document.querySelectorAll('img, iframe')) {
        let coords = el.getBoundingClientRect();
        if (((coords.y >= 0 && coords.y <= window.innerHeight) || (coords.bottom >= 0 && coords.bottom <= window.innerHeight))
            &&
            !el.hasAttribute('src')
            &&
            el.hasAttribute('data-src')) {
            el.src = el.dataset.src;
        };
    };
});