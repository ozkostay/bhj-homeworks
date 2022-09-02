const textArea = document.getElementById('editor');
const button = document.getElementById('button');
textArea.value = localStorage.getItem('text');

button.addEventListener( 'click', () => {
    textArea.value = '';
});

textArea.addEventListener( 'input', () => {
    localStorage.setItem('text', textArea.value);
});