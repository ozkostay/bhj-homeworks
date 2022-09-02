
const xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');


xhr.onload = function() {
    responseObj = xhr.response;
    pollTitle.textContent = responseObj.data.title;
    answers = responseObj.data.answers;
    let answerButton;
    for (let num in answers) {
        answerButton = document.createElement('button');
        answerButton.classList.add('poll__answer');
        answerButton.textContent = answers[num];
        answerButton.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        });
        pollAnswers.insertAdjacentElement('beforeend', answerButton);
    }
};

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();

