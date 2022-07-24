
const checkUls = Array.from( document.querySelectorAll('input') );

checkUls.forEach( (item) => {
    item.checked = false;
    item.addEventListener('click', clickInput);
});

function clickInput (item) {
    let checkNow = item.target.checked;
    let parentLi = item.target.closest('li');
    let inputsOfparentLi = Array.from( parentLi.querySelectorAll('input') );
    
    inputsOfparentLi.forEach( (input) => {
        input.checked = checkNow;
    });
}
