
console.log(new Date);
const list = Array.from(document.getElementsByClassName('dropdown__value'));

list.forEach( (element) => {
    console.log(element.parentElement);
    element.addEventListener('click', fnClickDiv);
})

function fnClickDiv() {
    console.log('ddd: ', this);
    const dropDownLists = Array.from(document.getElementsByClassName('dropdown__list'));
    dropDownLists.forEach( (element) => {
        if ( (this.parentElement === element.parentElement) && (element.className === 'dropdown__list') ) {
            element.className = 'dropdown__list dropdown__list_active';
        } else {
            element.className = 'dropdown__list';
        }
    })
    
    //return false;
}

//====================

const links = Array.from(document.getElementsByClassName('dropdown__link'));

links.forEach( (element) => {
    console.log('Link: ',element);
    element.addEventListener('click', fnClickAnch);
})

function fnClickAnch() {
    // dropdown__value
    const anchorParent = this.closest('.dropdown');
    console.log('1', this);
    const dropDownLists = Array.from(document.getElementsByClassName('dropdown__value'));
    dropDownLists.forEach( (element) => {
        
        if ( (element.parentElement === anchorParent) ) {
            console.log('2', element);
            element.textContent = 'asdasdasd';
            //return false;
        } else {
            console.log('3', this);
        }
        console.log(element.textContent);
    })
    
    ////window.alert('fdffffffffffffffffffff');
    

}


console.log(new Date);