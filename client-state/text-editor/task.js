const textArea = document.getElementById('editor');
const button = document.getElementById('button');
textArea.value = localStorage.getItem('text');

button.addEventListener( 'click', () => {
    textArea.value = '';
});

function saveText() {
    localStorage.setItem('text', textArea.value);
}
  
setInterval(saveText, 1000);