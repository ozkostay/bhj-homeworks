
const list = Array.from(document.getElementsByClassName('dropdown__value'));

list.forEach( (element) => {
    console.log(element.parentElement);
    element.addEventListener('click', fnClickDiv);
})

function fnClickDiv () {
    console.log('ddd: ', this);
    const dropDownLists = Array.from(document.getElementsByClassName('dropdown__list'));
    dropDownLists.forEach( (element) => {
        if ( (this.parentElement === element.parentElement) && (element.className === 'dropdown__list') ) {
            element.className = 'dropdown__list dropdown__list_active';
        } else {
            element.className = 'dropdown__list';
        }
    })
    

}

//====================

const links = Array.from(document.getElementsByClassName('dropdown__link'));

links.forEach( (element) => {
    console.log('Link: ',element);
    element.addEventListener('click', fnClickAnch);
})

function fnClickAnch () {
    // dropdown__value
    console.log('gggggggggggggggggggggggggggggggg');
    console.log('anch_par: ', this.parentElement.parentElement.parentElement);
    //console.log('anch_par: ', this.closest('dropdown__value'));
    window.alert('fdffffffffffffffffffff');
    
    
    // const dropDownLists = Array.from(document.getElementsByClassName('dropdown__list'));
    // dropDownLists.forEach( (element) => {
    //     if ( (this.parentElement === element.parentElement) && (element.className === 'dropdown__list') ) {
    //         element.className = 'dropdown__list dropdown__list_active';
    //     } else {
    //         element.className = 'dropdown__list';
    //     }
    // })
    return false;    

}


