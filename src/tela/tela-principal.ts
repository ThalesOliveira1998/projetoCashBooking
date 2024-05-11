import Prompt from "prompt-sync";
import TelaCadastrarCartao from "../tela/telas-Cadastrar/tela-cadastrar-cartao";
import TelaObterCartoes from "../tela/telas-Obter/tela-obter-cartoes";
import TelaCadastrarGasto from "../tela/telas-Cadastrar/tela-cadastrar-gasto";
import TelaObterGastos from "../tela/telas-Obter/tela-obter-gastos";
import TelaObterCartoesPorNome from "../tela/telas-Obter/tela-obter-cartao-por-nome";
import TelaCadastrarReceita from "../tela/telas-Cadastrar/tela-cadastrar-receita";
import TelaObterReceitas from "../tela/telas-Obter/tela-obter-receitas";

export default class TelaPrincipal {
    private prompt = Prompt();

    exibir() {
        console.log('Menu principal');
        console.log('--------------');
        console.log('1 - Cadastros');
        console.log('2 - Obter');
        console.log('10 - Sair');

        const opcao = this.prompt('Escolha uma opção: ');

        if (opcao === '1') {
            this.exibirCadastrosMenu();
        } else if (opcao === '2') {
            this.exibirObterMenu();
        } else if (opcao === '10') {
            process.exit(0);
        } else {
            console.log('Opção inválida!');
        }
    }

    exibirCadastrosMenu() {
        let opcao;
        do {
            console.log('Menu de Cadastros');
            console.log('-----------------');
            console.log('1 - Novo cartão');
            console.log('2 - Novo gasto');
            console.log('7 - Nova receita');
            console.log('10 - Voltar para o menu principal');
    
            opcao = this.prompt('Escolha uma opção: ');
    
            switch (opcao) {
                case '1':
                    new TelaCadastrarCartao().exibir();
                    break;
                case '2':
                    new TelaCadastrarGasto().exibir();
                    break;
                case '7':
                    new TelaCadastrarReceita().exibir();
                    break;
                case '10':
                    break; // Exiting loop to return to the main menu
                default:
                    console.log('Opção inválida!');
            }
        } while (opcao !== '10');
        this.exibir(); // Returning to the main menu
    }
    
    exibirObterMenu() {
        let opcao;
        do {
            console.log('Menu de Obter');
            console.log('--------------');
            console.log('1 - Lista de Cartões');
            console.log('2 - Lista de Gastos');
            console.log('3 - Escolher um cartão por nome');
            console.log('4 - Consultar as receitas');
            console.log('10 - Voltar para o menu principal');
    
            opcao = this.prompt('Escolha uma opção: ');
    
            switch (opcao) {
                case '1':
                    new TelaObterCartoes().exibir();
                    break;
                case '2':
                    new TelaObterGastos().exibir();
                    break;
                case '3':
                    const telaObterCartoesPorNome = new TelaObterCartoesPorNome();
                    const nomeCartao = this.prompt('Digite o nome do cartão: ');
                    telaObterCartoesPorNome.exibir(nomeCartao);
                    break;
                case '4':
                    new TelaObterReceitas().exibir();
                    break;
                case '10':
                    break; // Exiting loop to return to the main menu
                default:
                    console.log('Opção inválida!');
            }
        } while (opcao !== '10');
        this.exibir(); // Returning to the main menu
    }
    
}
