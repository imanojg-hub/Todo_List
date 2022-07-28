let submitButton = document.getElementById('submit-btn')
let todoInput = document.getElementById('todo-input')
let form = document.getElementById('form')

submitButton.addEventListener('click', (e) => {
  e.preventDefault()

  let getTodo = document.getElementById('todo')

  if (todoInput.value.length == 0) {
    alert('todo is empty')
  } else {
    const todoMain = document.createElement('div')
    todoMain.classList.add('todo-main')
    getTodo.appendChild(todoMain)

    const todoEl = document.createElement('div')
    todoEl.classList.add('main')
    todoMain.appendChild(todoEl)

    const todoActive = document.createElement('input')
    todoActive.type = 'checkbox'
    todoActive.classList.add('active')
    todoEl.appendChild(todoActive)

    const todoList = document.createElement('input')
    todoList.type = 'text'
    todoList.value = todoInput.value
    todoList.classList.add('todo-list')
    todoEl.appendChild(todoList)
    todoList.setAttribute('readonly', 'true')
    todoInput.value = ''

    const todoDelete = document.createElement('button')
    todoDelete.classList.add('material-symbols-outlined', 'todo-delete')

    todoMain.appendChild(todoDelete)
    todoDelete.innerHTML = 'delete'

    todoDelete.addEventListener('click', () => {
      getTodo.removeChild(todoMain)
    })
  }
})
