
const firstModalWindow = document.getElementById('modal_main');
firstModalWindow.className = 'modal modal_active';

const elements  = document.getElementsByClassName('modal__close')
const arrElements = Array.from(elements);

arrElements.forEach( (item) => {
    item.onclick = function() {
        const parentModal = item.closest('.modal');
        parentModal.className = 'modal';
        if ( item.classList.contains('btn') ) {
            const secondModal = document.getElementById('modal_success');
            secondModal.className = 'modal modal_active';
        }
    }
});





