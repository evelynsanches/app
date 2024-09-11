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
// let meta = {
//     value: 'let um livro todo mes',
//     checked: false,
//     log: (info) => {
//         console.log(info)
//     }
// }
// meta.value = "nao é mais ler um livro"
// meta.log(meta.value)

// let metas = [
//     meta,
//     {
//         value: "caminhar 20 minutos todos os dias",
//         checked: false
//     }
// ]

// console.log(metas[1].value)

//function - arrow function
// const criarMeta = () => {}

// function criarMeta() {}


// aula 2

const { select, input } = require('@inquirer/prompts')

let meta = {
    value: "Tomar 2l de agua por dia",
    checked: false,
}
let metas = [ meta ]
const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:"})
    if(meta.length == 0) {
        console.log('A meta nao pode ser vazia.')
        return
    }

    metas.push(
        { value: meta, checked: false})
}
const start = async () => {
    while(true){
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"

                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })


        switch(opcao) {
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                console.log("Ate a proxima!")
                return
        }
    }
}
start()