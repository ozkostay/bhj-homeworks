
const modalWindow = document.getElementById('subscribe-modal');

if ( getCookie ('wasPopap') != 1 ) {
    modalWindow.classList.add('modal_active');
}

function setCookie (name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie (name) {
    const allCookies = document.cookie.split('; ');
    const isCookie = allCookies.find( (item) => item.startsWith( name+"=" ));
    return isCookie ? isCookie.substr( name.length + 1 ): isCookie;
}

modalWindow.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal__close') ) {
        modalWindow.classList.remove('modal_active');
        setCookie ( 'wasPopap', 1 );
    }
});
