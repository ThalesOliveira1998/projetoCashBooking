import ObterCartoesPorNome from "../../nucleo/fluxos/obter/obter-cartoes-por-nome";
import Cartao from "../../nucleo/dados/operacoes/cartao";



export default class TelaObterCartoesPorNome {
    exibir(nome: string): void {    
        console.log("Os cartões selecionados são:\n");
        console.log("-----------");

        const cartoes: Cartao | null = new ObterCartoesPorNome().executar(nome); // Calling the executar method with the provided name
        
        if (cartoes !== null) {
            console.log(`${cartoes.id} - ${cartoes.nome}`);
        } else {
            console.log("Nenhum cartão encontrado com o nome especificado.");
        }
    }
}