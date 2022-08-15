

const taskList = document.getElementById('tasks__list');
const button = document.getElementById('tasks__add');
const newTaskInput = document.getElementById('task__input');
newTaskInput.value = '';

button.addEventListener('click', buttonClick);

function buttonClick () {
    if (newTaskInput.value) {
        let newTask = document.createElement('div');
        newTask.classList.add('task');
        
        let taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = newTaskInput.value;

        let taskRemove = document.createElement('a');
        taskRemove.href = "#";
        taskRemove.classList.add('task__remove');
        
        // Вот здесь &times; вставляю, в HTML вижу все верно, на странице вместо крестика текст
        // не понятно как???
        taskRemove.textContent = '&times;';
        
        taskRemove.addEventListener('click', removeClick);

        newTask.insertAdjacentElement('afterbegin', taskTitle);
        taskTitle.insertAdjacentElement('afterend', taskRemove);
        taskList.insertAdjacentElement('beforeend', newTask);

        newTaskInput.value = '';
    } else {
        console.log('Текст пустой');
    };

};

function removeClick () {
    event.target.parentElement.remove();
};