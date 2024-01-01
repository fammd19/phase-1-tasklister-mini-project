document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target['new-task-description'].value);
    form.reset();
  })
});

function buildToDo (todo) {
  let li = document.createElement ('li');
  li.textContent = todo;
  document.querySelector('#tasks').appendChild(li);
}

