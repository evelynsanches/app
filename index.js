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

const { select, input, checkbox } = require('@inquirer/prompts')

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
const listarMetas  = async () => {
     const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaco para marcar ou desmarcar, e o Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false
     })

     metas.forEach((m) => {
        m.checked = false

     })


     if(respostas.length == 0) {
        console.log('Nenhuma meta selecionada!')
        return
     }

     respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
     })

     console.log('Meta(s) marcadas como concluida(s)')
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })
    if(realizadas.length == 0) {
        console.log('Nao existem metas realizadas! :(')
        return
    }

    await select({
        message: "Metas Realizadas: " + realizadas.length,
        choices: [...realizadas]
    })
}

const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })

    if(abertas.length == 0) {
        console.log("Nao existem metas abertas! :)")
        return
    }

    await select({
        message: "Metas abertas: " + abertas.length,
        choices: [...abertas]
    })
}

const deletarMetas = async () => {
    const metasDesmarcadas = metas.map((meta) => {
        return {value: meta.value, checked: false}
    })

    const itemsADeletar = await checkbox({
        message: "Selecione item para deletar",
        choices: [...metasDesmarcadas],
        instructions: false,
    })
    
    if(itemsADeletar.length == 0) {
        console.log("Nenhum item para deletar!")
        return
    }

    itemsADeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })
    console.log("Meta(s) deletada(s) com sucesso!")
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
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Deletar metas",
                    value: "deletar"
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
                await listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "deletar":
                await deletarMetas()
                break
            case "sair":
                console.log("Ate a proxima!")
                return
        }
    }
}
start()