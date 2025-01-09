        const input = document.getElementById('input')
        const btn = document.getElementById('btn')
        const todosUL = document.getElementById('todos')  
        btn.addEventListener('click', addtodo);


        const todos = JSON.parse(localStorage.getItem('todos'))
        todos.forEach(store_text => {
            addtodo(store_text) 
        }) 

 
        

const form = document.querySelector("form")
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        addtodo()
    })


function addtodo(store_text){
    let todoText = input.value
    const list = document.createElement('li')
    const close = document.createElement('div')
    close.innerHTML ='<img src="images/cancel.png" width="15px">'
    close.classList.add("close")

    if(input.value == ""){
        todoText = store_text.text
        console.log(store_text)
    }
    if(todoText){
        list.textContent = todoText
        list.appendChild(close)
        list.classList.add('items')
        todosUL.prepend(list)

//call the local storage
        updateLS()
//This is the expression to delete a task
        if(close.innerHTML){
            const li = [...document.querySelectorAll('li')]
            const close_icon = [...document.querySelectorAll('.close')]
            li.forEach((item, i) => {
                item.id = "li" + i
               
            })
            close_icon.forEach((icon, i) => {
                icon.id = "li" + i
            })

            close.addEventListener('click', () =>{
                if(close.id === list.id)
                    list.remove()
                    updateLS(list)
            })

        }

       
    }
   

}

// This is the function to call the local storage  
function updateLS(todel) {
    let list = document.querySelectorAll('li')

    const todos = []
    if(todel){
        localStorage.removeItem(list)
    }

    list.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            items: todoEl.classList.contains('items')
        })
    })
       
    localStorage.setItem('todos', JSON.stringify(todos))
}