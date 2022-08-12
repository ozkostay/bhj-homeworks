
// навесить КЛИК на кнопку
// по Клику:

// 1 Проверить на пустое поле
// 2 Нет -> 
//     3 Создать ДИВ класс task
//     4 Внетри создать ДИВ класс task__title
//     5 Внутрь textContent из поля
//     6 После него А ремув на него событи по удалению
//     10 Расположить ДИВ класс task после последнего задания

const taskList = document.getElementById('tasks__list');
const button = document.getElementById('tasks__add');
const newTaskInput = document.getElementById('task__input');
newTaskInput.value = '';
//let lastTaskInList = 'rrr';
//console.log('222 ', newTask);

button.addEventListener('click', buttonClick);

function buttonClick () {
    if (newTaskInput.value) {
        let newTask = document.createElement('div');
        newTask.classList.add('task');
        
        let taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = newTaskInput.value;

        let taskRemove = document.createElement('a');
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