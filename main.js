window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('name');
    const newTodoform = document.querySelector('new-todo-form');

    const username = localstorage.getItem('username') || '';
    nameInput.value = username;
    nameInput.addEventListener('change', e => {
            localstorage.setItem('username', e.target.value);
    })
})