
const modalWindow = document.getElementById('subscribe-modal');

if ( localStorage.getItem('wasPopap') != 1 ) {
    modalWindow.classList.add('modal_active');
}

modalWindow.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal__close') ) {
        modalWindow.classList.remove('modal_active');
        localStorage.setItem( 'wasPopap', 1 );
    }
});





