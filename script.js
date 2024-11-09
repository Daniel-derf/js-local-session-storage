// inserir dado
localStorage.setItem("name", "Daniel")

// resgatar item
const name = localStorage.getItem("name")
console.log('name: ', name)

// remover item
localStorage.removeItem("name")

// limpar todos os itens
localStorage.setItem("a", 1)
localStorage.setItem("b", 2)

localStorage.clear()

