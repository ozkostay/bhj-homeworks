
const modalWindow = document.getElementById('subscribe-modal');

//if ( localStorage.getItem('wasPopap') != 1 ) {

//console.log('000', getCookie('wasPopap'));
document.cookie = "user=John";
document.cookie = "user2=John222";

let aaa = document.cookie.split('; ');

console.log(document.cookie);
console.log(aaa);

// if ( document.cookie.getItem('wasPopap') != 1 ) {
//     console.log('111');
//     modalWindow.classList.add('modal_active');
// } else {
//     console.log('222');
// }
function setCookie (name, value) {
    document.cookie = name + encodeURIComponent(value);
}

function getCookie (name) {
    const allCookies = document.cookie.split('; ');
    const isCookie = allCookies.find( (item) => item.startsWith( name+"=" ));
    return isCookie ? isCookie.substr( name.length + 1 ): isCookie;
}

console.log('333' + getCookie('user') + '333' );
console.log('444' + getCookie('user5') + '444' );
//console.log('444 ', getCookie('cdcd') );

modalWindow.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal__close') ) {
        modalWindow.classList.remove('modal_active');
        //localStorage.setItem( 'wasPopap', 1 );
        document.cookie.setItem( 'wasPopap', 1 );
    }
});





