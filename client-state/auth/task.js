const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const xhr = new XMLHttpRequest();
signin.classList.add('signin_active');

xhr.addEventListener('readystatechange', () => {
    if ( xhr.readyState === xhr.DONE ) {
        if ( xhr.response.success ) {
            signin.classList.remove('signin_active');
            document.getElementById('user_id').innerText = xhr.response.user_id;
            welcome.classList.add('welcome_active');
        } else {
            alert('Неверный логин/пароль');
        }
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    const formData = new FormData(form);
    xhr.responseType = 'json';
    xhr.send(formData);
})

