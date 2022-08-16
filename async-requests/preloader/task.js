
// Пример
function getUser() {
    try {
        returnJSON.parse( localStorage.getItem('user') );
    }catch(e) {
        return null;
    }
};

//================
const xhr = new XMLHttpRequest();

console.log('xhr ', xhr);

xhr.addEventListener('readystatechange', () => {
    if ( xhr.readyState ) {
        console.log(xhr.responseText);
        console.log(111);
    }
});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();