function formatarNome(nome) {
    return nome
        .trim()
        .toLowerCase()
        .split(' ')
        .map(termo => termo.charAt(0).toUpperCase() + termo.slice(1))
        .join(' ');
};

function normalizarUsuarios(json) {
    const listaUsuarios = JSON.parse(json)
    let listaFinal = []
    
    for (let usuario of listaUsuarios) {
        let nome = usuario.nome
        nome = formatarNome(nome)
        
        const idade = parseInt(usuario.idade, 10)
        const maiorDeIdade = idade > 18
        
        const objeto = {
            nome,
            email: usuario.email.toLowerCase(),
            idade,
            maiorDeIdade,
        }
        listaFinal.push(objeto)
    }
     
    return JSON.stringify(listaFinal)
}

const usuariosJSON = `[
 {"nome": " carlos silva ", "email": "CARLOS@EMAIL.COM", "idade": "25"},
 {"nome": "MARIA", "email": "maria@email.com", "idade": "30"},
 {"nome": "João Santos", "email": "joao@email.com", "idade": "17"}
]`;

const normalizado = normalizarUsuarios(usuariosJSON)
