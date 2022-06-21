function changeSpans (items) {
    let currentIndex, nextIndex ;
    const itemsLength = items.length;

    items.forEach( (span, index) => {
        if ( span.classList.contains('rotator__case_active') ) {
            currentIndex = index;
            if (index === itemsLength - 1) {
                nextIndex = 0;    
            } else {
                nextIndex = index + 1;
            }
        }
    });
    
    items[currentIndex].classList.remove('rotator__case_active');
    items[nextIndex].classList.add('rotator__case_active');
}


function makeRotation() {
    const parents = Array.from(document.querySelectorAll('div.card'));
    const rotators = Array.from(document.querySelectorAll('span.rotator__case'));
    let arrFilterSpan;
    
    parents.forEach( (elementParent, index) => {
        arrFilterSpan = rotators.filter( (item) => {
            if ( item.closest('div.card') === elementParent ) {
                return item;
            }
        });
          
        changeSpans (arrFilterSpan);

    });
};

setInterval( makeRotation, 1000 );    













