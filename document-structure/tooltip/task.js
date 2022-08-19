
const elementsHasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
let lastTitle = '';

elementsHasTooltip.forEach( (item) => {
    item.addEventListener('click', clickInput);
});

function  clickInput (item) {
    event.preventDefault();
    const activeTooltip = Array.from(document.querySelectorAll('.tooltip_active'));
    activeTooltip.forEach( (item) => {
        //item.classList.remove('tooltip_active');
        item.remove('tooltip_active');
    });

    let {top, left}  = item.target.getBoundingClientRect();
    let tip = document.createElement('div');
    
    if ( lastTitle === item.target.title) {
        lastTitle = '';
        return;
    }
    tip.textContent = item.target.title;
    tip.classList.add('tooltip');
    tip.style.top = top + 20 + 'px';
    tip.style.left = left + 'px';
    tip.classList.add('tooltip_active');

    item.target.insertAdjacentElement('afterend', tip);

    lastTitle = item.target.title;
};




