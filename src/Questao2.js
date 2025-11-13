function analisarTexto(texto) {
    // Separar palavras
    const aSerSeparado = texto.replaceAll(".", "");
    const separado = aSerSeparado.split(" ");

    // Variáveis para as próximas estruturas de repetição
    let contador = 0;
    let tamanhoTotal = 0;
    let frequenciaObjeto = {};
    
    for (let palavra of separado) {
        // Obter os parâmetros para a média de tamanho
        contador++;
        tamanhoTotal += palavra.length;
        
        //Contar a quantidade de instâncias de cada palavra
        if (frequenciaObjeto[palavra] == null) {
            frequenciaObjeto[palavra] = 1;
        } else {
            frequenciaObjeto[palavra] = frequenciaObjeto[palavra] + 1;
        };
    };
    
    // Converter frequenciaObjeto para a lista desejada
    const chave = Object.keys(frequenciaObjeto);
    const valor = Object.values(frequenciaObjeto);
    let frequencia = [];
    
    for (let i in chave) {
        frequencia.push({palavra: chave[i], frequencia: valor[i]})
    };

    // Retorno
    return {
        totalPalavras: separado.length,
        frequenciaPalavras: frequencia,
        tamanhoMedioPalavras: tamanhoTotal/contador,
    }
};

const texto = "JavaScript é uma linguagem de programação. JavaScript é versátil e JavaScript é poderoso.";

const resultado = analisarTexto(texto);
