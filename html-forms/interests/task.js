// let aaa = [
//     {parentUl: '1', child: '11'},
//     {parentUl: '1', child: '12'},
//     {parentUl: '2', child: '21'},
//     {parentUl: '3', child: '22'},
//     {parentUl: '11', child: '111'},
//     {parentUl: '11', child: '112'},
//     {parentUl: '11', child: '113'}
// ];

// console.log(aaa);
//let checkBoxTree = [];

const checkUls = Array.from( document.querySelectorAll('input') );
console.log(checkUls);

checkUls.forEach( (item) => {
    item.checked = false;
    item.addEventListener('click', clickInput);
    //console.log('Parent_Ul ', item.closest('li'));
    //console.log('item ', item);
    // if (item.closest('ul') === item) {
    //     checkBoxTree.push({parentUl: null, child: item});    
    // } else {
    //     checkBoxTree.push({parentUl: item.closest('ul'), child: item});
    // }
    
    //console.log('================ ');
    //checkBoxTree.push({parentUl: item.closest('ul'), child: item});
});

//console.log(checkBoxTree);

function clickInput (item) {
//     checkInputs.forEach( (item) => {

//     });
    //console.log('555    ', item.target.checked);
    //console.log( item.target.closest('li').childNodes );
    let checkNow = item.target.checked;
    let parentLi = item.target.closest('li');
    let inputsOfparentLi = Array.from( parentLi.querySelectorAll('input') );
    
    inputsOfparentLi.forEach( (input) => {
        //console.log('inputs ', input);
        input.checked = checkNow;
    });
    //event.preventDefault();
    //console.log('ddd ', this.checked + ' ddd');
}
