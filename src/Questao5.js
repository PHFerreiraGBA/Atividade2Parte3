function parseQueryString(query) {
    const splitItems = query.split("&");
    let queryObject = {};
    
    for (let item of splitItems) {
        const splitString = item.split("=");
        queryObject[splitString[0]] = splitString[1];
    };
    
    queryObject.preco = parseInt(queryObject.preco);
    queryObject.avaliacao = parseFloat(queryObject.avaliacao);
    
    return JSON.stringify(queryObject)
}
 
const queryString = "categoria=eletronicos&preco=500&marca=samsung&avaliacao=4.5";

const queryJSON = parseQueryString(queryString);
