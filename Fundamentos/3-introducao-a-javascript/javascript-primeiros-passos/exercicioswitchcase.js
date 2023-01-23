let statusselecao;
statusselecao = 'lista';

switch (statusselecao) {
    case 'aprovada':
        statusselecao = 'Parabéns, você foi aprovada(o)!';
        break;
    case 'lista':
        statusselecao = 'Você está na nossa lista de espera';
        break;
    case 'reprovada':
        statusselecao = 'Você foi reprovada(o)';
        break;
    default:
        statusselecao = 'Informação incorreta';
}

console.log(statusselecao);