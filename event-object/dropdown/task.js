// Для контроля
console.log(new Date);

const list = Array.from(document.getElementsByClassName('dropdown__value'));

list.forEach( (element, index) => {
    element.addEventListener('click', fnClickDiv);
})

function fnClickDiv() {
    const dropDownLists = Array.from(document.getElementsByClassName('dropdown__list'));
    dropDownLists.forEach( (element) => {
        if ( (this.parentElement === element.parentElement) && (element.className === 'dropdown__list') ) {
            element.classList.add('dropdown__list_active');
        } else {
            element.classList.remove('dropdown__list_active');
        }
    });
}

//====================

const links = Array.from(document.getElementsByClassName('dropdown__link'));

links.forEach( (element) => {
    element.addEventListener('click', fnClickAnch);
});

function fnClickAnch() {
    console.log(this.textContent.trim());
    const anchorParent = this.closest('.dropdown');
    const dropDownValue = Array.from(document.getElementsByClassName('dropdown__value'));
    dropDownValue.forEach( (element) => {
        if ( (element.parentElement === anchorParent) ) {
            element.textContent = this.textContent.trim();
        }
    });
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // По идее следующая команда должна отменить переход, но не отменяет, не могу понять почему
    // Перестраивается дерево DOM со старым значением textContent, тоже не понятно почему :-(
    return false;
}

// Для контроля
console.log(new Date);