import ObterCartoes from "../../nucleo/fluxos//obter/obter-cartoes";
import ObterCartoesPorNome from "../../nucleo/fluxos/obter/obter-cartoes-por-nome";
import Cartao from "../../nucleo/dados/operacoes/cartao";

 export default class TelaObterCartoes {
     exibir(){    
         console.log("Lista de Cartões\n")
         console.log("-----------")

        const cartoes = new ObterCartoes().executar()
        for(const cartao of cartoes){
         console.log(`${cartao.id} - ${cartao.nome} - ${cartao.datetime}`)
        }    
     }
 }
