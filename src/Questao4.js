function sanitizarDados(dados) {
    for (let usuario of dados.usuarios){
        let cpfSanitizado = usuario.cpf.split("-");
        cpfSanitizado = `***.***.***-${cpfSanitizado[1]}`;
        usuario.cpf = cpfSanitizado;
        
        let cartaoSanitizado = usuario.cartaoCredito.split("-");
        cartaoSanitizado = `****-****-****-${cartaoSanitizado[3]}`;
        usuario.cartaoCredito = cartaoSanitizado;
        
        let telSanitizado = usuario.telefone.split("-");
        const quatroUltimos = telSanitizado[1];
        const quatroPrimeiros = telSanitizado[0].split(" ");
        telSanitizado = `${quatroPrimeiros[0]} ****-${quatroUltimos}`;
        usuario.telefone = telSanitizado;
    };
    
    dados.metadata.token = `${dados.metadata.token.substr(0, 10)}...`;
    
    return dados
};

const dadosSensiveis = {
    usuarios: [
        {
            cpf: "123.456.789-00",
            cartaoCredito: "5555-6666-7777-8888",
            telefone: "(11) 99999-9999",
            nome: "Fulano de Tal"
        }
    ],
    metadata: {
        ip: "192.168.1.100",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    }
};

const dadosSanitizados = sanitizarDados(dadosSensiveis);
