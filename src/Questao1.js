function jsonParaLista(textoJson) {
    const convertido = JSON.parse(textoJson)
    let produtos = [] 
    
    for (let item of convertido.itens) {
        let linhaFormatada = `${item.nome} - R$ ${item.preco.toFixed(2).replace(".", ",")} (Categoria: ${item.categoria})`
        produtos.push(linhaFormatada)
    }
    
    return produtos
}

const produtosJSON = `{
 "itens": [
 {
 "id": 1,
 "nome": "Notebook Gamer",
 "preco": 2999.99,
 "categoria": "eletronicos",
 "tags": ["tecnologia", "computacao", "gamer"]
 },
 {
 "id": 2, 
 "nome": "Mesa Escritório",
 "preco": 450.50,
 "categoria": "moveis",
 "tags": ["escritorio", "madeira", "profissional"]
 }
 ]
}`;

const resultado = jsonParaLista(produtosJSON)