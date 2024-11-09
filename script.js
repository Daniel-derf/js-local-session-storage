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

// session storage
sessionStorage.setItem("number", 123); // reiniciar e perder dados

const n = sessionStorage.getItem("number")

console.log(n)

// salvar objeto
const person = {
    name: 'daniel',
    age: 20,
    job: 'software engineer'
}

localStorage.setItem('person', JSON.stringify(person))

const getPerson = localStorage.getItem("person")

const personObject = JSON.parse(getPerson)

console.log(personObject.name)




