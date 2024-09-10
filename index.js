// hello world
// let mensagem = 2
// {
//     let mensagem = "oi"
//     console.log(mensagem)
// }
// console.log(mensagem);

//arrays, objetos
// let metas = ["dormir", "comer"]
// console.log(metas[0])

//objeto
let meta = {
    value: 'let um livro todo mes',
    checked: false,
    log: (info) => {
        console.log(info)
    }
}
// meta.value = "nao é mais ler um livro"
// meta.log(meta.value)

let metas = [
    meta,
    {
        value: "caminhar 20 minutos todos os dias",
        checked: false
    }
]

console.log(metas[1].value)

//function - arrow function
// const criarMeta = () => {}

// function criarMeta() {}