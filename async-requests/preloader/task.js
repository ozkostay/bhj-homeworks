
const xhr = new XMLHttpRequest();
const itemsTable = document.getElementById('items');
const loaderImg = document.getElementById('loader');

xhr.addEventListener('readystatechange', () => {
    if ( xhr.readyState === xhr.DONE ) {
        
        xhrResponse = xhr.response;
        responseValute = xhrResponse.response.Valute;
        loaderImg.classList.remove('loader_active');

        for (let num in responseValute) {
            
            // Вот ниже строка вроде правильно, а не работает :-(
            //itemsTable.insertAdjacentElement('beforeend', '<div class="item"><div class="item__code">' + responseValute[num].CharCode + '</div><div class="item__value">' + responseValute[num].Value + '</div><div class="item__currency"> руб.</div></div>');
            
            itemsTable.innerHTML += '<div class="item"><div class="item__code">' + responseValute[num].CharCode + '</div><div class="item__value">' + responseValute[num].Value + '</div><div class="item__currency"> руб.</div></div>';
        }
    }
});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.responseType = 'json';
xhr.send();
