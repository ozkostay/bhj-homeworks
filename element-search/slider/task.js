
let sliderItemActiveIndex;
const sliderItems = Array.from(document.getElementsByClassName('slider__item'));

sliderItems.forEach( (element, index) => {
    if (element.className.includes('slider__item_active')) {
        sliderItemActiveIndex = index;
    }
});

const arrowPrev = Array.from(document.getElementsByClassName('slider__arrow_prev'));

arrowPrev.forEach( element => {
    element.onclick = function() {
        sliderItems[sliderItemActiveIndex].className = 'slider__item';
        if (sliderItemActiveIndex === 0 ) {
            sliderItemActiveIndex = (sliderItems.length - 1);
        } else {
            sliderItemActiveIndex--;
        }
        sliderItems[sliderItemActiveIndex].className = 'slider__item slider__item_active';
    }
});

const arrowNext = Array.from(document.getElementsByClassName('slider__arrow_next'));
arrowNext.forEach( element => {
    element.onclick = function() {
        sliderItems[sliderItemActiveIndex].className = 'slider__item';
        if (sliderItemActiveIndex === ( sliderItems.length - 1 ) ) {
            sliderItemActiveIndex = 0;
        } else {
            sliderItemActiveIndex++;
        }
        sliderItems[sliderItemActiveIndex].className = 'slider__item slider__item_active';
    }
});
