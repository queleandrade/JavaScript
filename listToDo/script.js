const listContanier = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit', function(e){
    e.preventDefault()
    const listName = newListInput.value 
    if(listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render ()
})

function render(){
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name 
        listContanier.appendChild(item)
    })
}

function createList(name){
    return {id: Date.now().toString(), name: name}
}

render()