import Prompt from "prompt-sync";
import CadastrarCartao from "../nucleo/fluxos/cadastrar-cartao";

export default class TelaCadastrarCartao {
    private prompt = Prompt()
    

    exibir(){    
        console.log("Novo Cartão\n")
        console.log("-----------")

        try {
            const nomeCartao = this.prompt("Informe o nome do cartão:")

            new CadastrarCartao().executar(nomeCartao)
     
            console.log("Cartão cadastrado com sucesso ")


        } catch(e: any) {
            console.error(e.message)
        }     
    }
}