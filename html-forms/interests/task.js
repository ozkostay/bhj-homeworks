const checkInputs = Array.from(document.querySelectorAll('input.interest__check'));
console.log(checkInputs);

checkInputs.forEach( (element) => {
    element.checked = false;
    element.addEventListener('click', clickInput);
});

function clickInput () {
    
    //this.checked = true;
    
    // if (this.checked) {
    //     this.checked = false;
    //     console.log('t');
    // } else {
    //     this.checked = true;
    //     console.log('f');
    // }
    
    checkInputs.forEach( (item) => {
        //console.log(item);
        console.log('ccc ', item.closest('input.interest__check'));
        if (item.closest('li.interest') === this.closest('li.interest')) {
            item.cheched = this.checked;
            console.log('bbb ',item.cheched, ' fff ',this.checked  );
        }

    });

    //event.preventDefault();
    //console.log('ddd ', this.checked + ' ddd');
}
