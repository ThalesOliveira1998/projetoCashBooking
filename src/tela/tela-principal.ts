 import  Prompt  from "prompt-sync"
 import TelaCadastrarCartao from "./tela-cadastrar-cartao"
 import TelaObterCartoes from "./tela-obter-cartoes"
 import TelaCadastrarGasto from "./tela-cadastrar-gasto"
import TelaObterGastos from "./tela-obter-gastos"
import  TelaObterCartoesPorNome  from "./tela-obter-cartao-por-nome"


 export default class TelaPrincipal {
    private prompt = Prompt()

   exibir() {
         console.log('Menu principal')
         console.log('--------------')
         console.log(' 1 - Novo cartão')
         console.log(' 2 - Lista de Cartões')
         console.log(' 3 - novo gasto')
         console.log(' 4 - Lista de gastos')
         console.log(' 5 - Sair')
         console.log(' 6 -  para escolher um cartão por nome' )

        const opcao = this.prompt('Escolha uma opção: ')

        if(opcao === '1') {
         new TelaCadastrarCartao().exibir()
        } else if(opcao === '2') {
         new TelaObterCartoes().exibir()
        } else if(opcao === '3') {
         new TelaCadastrarGasto().exibir()
        }
         else if(opcao === '4') {
         new TelaObterGastos().exibir()   
        }
        else if(opcao === '6') {
         const telaObterCartoesPorNome = new TelaObterCartoesPorNome();
            const nomeCartao = this.prompt('Digite o nome do cartão: ');
            telaObterCartoesPorNome.exibir(nomeCartao);
        }
        else if(opcao === '5') {
         process.exit(0)
        }
        console.log('\n \n')
        this.exibir()
     }
 }