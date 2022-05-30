
const elementStatus = document.getElementById('timer');
let numberCountDown = Number(elementStatus.textContent);

const countDown = () => {
    numberCountDown = numberCountDown - 1;
    elementStatus.textContent = numberCountDown.toString();
    if (numberCountDown === 0) {
        window.clearTimeout(timerId);
        window.alert('Вы победили в конкурсе!');
    }
};

// Вопрос: как правильно писать " window.setInterval() "  или просто " setInterval() " ???????
const timerId = window.setInterval( countDown, 1000 );

