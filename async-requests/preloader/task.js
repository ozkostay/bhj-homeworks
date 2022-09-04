
const xhr = new XMLHttpRequest();
const itemsTable = document.getElementById('items');
const loaderImg = document.getElementById('loader');

xhr.onload = function () {
    //console.log(xhr);
    if ( xhr.status === 200 ) {
        responseValute = xhr.response.response.Valute;
        loaderImg.classList.remove('loader_active');

        for (let num in responseValute) {
            itemsTable.innerHTML += '<div class="item"><div class="item__code">' + responseValute[num].CharCode + '</div><div class="item__value">' + responseValute[num].Value + '</div><div class="item__currency"> руб.</div></div>';
        }
    }
};

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.responseType = 'json';
xhr.send();
