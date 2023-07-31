let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');
//local storage,cookies
let todos = [];//to delete easily the items and for local storage 
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener('click',()=>//function defined
{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value='' //to make it empty for entering next value
})

function addtodo(todo){ //to display items
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para)
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)   //todoList is a html element
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo)  //todos[]={todo,todo,todo};
    if (index > -1) {
        todos.splice(index, 1); //delete one element
      }
    localStorage.setItem('todos',JSON.stringify(todos))
}
