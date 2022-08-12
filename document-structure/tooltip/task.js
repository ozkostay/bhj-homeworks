
const elementsHasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

elementsHasTooltip.forEach( (item) => {
    item.addEventListener('click', clickInput);
});

function  clickInput (item) {
    event.preventDefault(); 
    let {top, left}  = item.target.getBoundingClientRect();
    let tip = document.createElement('div');
    
    tip.textContent = item.target.title;
    tip.classList.add('tooltip');
    tip.style.top = top + 20 + 'px';
    tip.style.left = left + 'px';
    tip.classList.add('tooltip_active');

    item.target.insertAdjacentElement('afterend', tip);
};




