
const progress = document.getElementById('progress');
const form = document.getElementById('form');
const xhr = new XMLHttpRequest();

form.addEventListener('submit', (event) => {
	event.preventDefault();

	xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
	};

    xhr.upload.onload = function() {
        alert( 'Данные полностью загружены на сервер!');
    };

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	const formData = new FormData(form);
	xhr.send(formData);
});