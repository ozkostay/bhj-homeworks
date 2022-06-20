
const parents = Array.from(document.querySelectorAll('div.card'));

function aaa(parent) {
    //console.log('333 ', parent);
    const rotators = Array.from(document.querySelectorAll('span.rotator__case'));
    const rotatorsLength = rotators.length;
    let nextIndex ;
    
    rotators.forEach( (span, index) => {
        console.log('ps2 ', span);
        if ( span.classList.contains('rotator__case_active') ) {

            if (index === rotatorsLength - 1) {
                nextIndex = 0;    
            } else {
                nextIndex = index + 1;
            }
            
            rotators[index].classList.remove('rotator__case_active');
            rotators[nextIndex].classList.add('rotator__case_active');
            console.log('ps2 ', span);
        }
        
    });
    

    //console.log('555 ', arrSpan);
};

parents.forEach( (elementParent) => {
        setInterval( aaa, 10000, elementParent );
    });

