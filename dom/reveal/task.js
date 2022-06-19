
const divReveals = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', showReveal);

function showReveal() {
    divReveals.forEach ( (element, index) => {
        const { top, bottom } = element.getBoundingClientRect();
        if ( top > 0 && bottom < window.innerHeight && !element.classList.contains('reveal_active')) {
            element.classList.add('reveal_active');
        }
    });
};