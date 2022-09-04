const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
form.reset();

if ( getCookie ('login') ) {
    signin.classList.remove('signin_active');
    wellcomeWindow( getCookie ('user_id') );
} else {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (  xhr.status === 200 ) {
            if ( xhr.response.success ) {
                signin.classList.remove('signin_active');
                user_id = xhr.response.user_id;
                wellcomeWindow( user_id );
                // Запись в кукки
                setCookie ('login', form.login.value.trim());
                setCookie ('user_id', user_id );
            } else {
                alert('Неверный логин/пароль');
            }
        }
    };

    form.addEventListener( 'submit', (event) => {
        event.preventDefault();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        const formData = new FormData(form);
        xhr.responseType = 'json';
        xhr.send(formData);
    });
}

function wellcomeWindow (id) {
    document.getElementById('user_id').innerText = id;
    welcome.classList.add('welcome_active');
}

function setCookie (name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie (name) {
    const allCookies = document.cookie.split('; ');
    const isCookie = allCookies.find( (item) => item.startsWith( name+"=" ));
    return isCookie ? isCookie.substr( name.length + 1 ): isCookie;
}



