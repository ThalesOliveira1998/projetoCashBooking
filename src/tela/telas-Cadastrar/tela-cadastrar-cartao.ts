import Prompt from "prompt-sync";
import CadastrarCartao from "../../nucleo/fluxos/cadastros/cadastrar-cartao";

export default class TelaCadastrarCartao {
    private prompt = Prompt();
    
    exibir(){    
        console.log("Novo Cartão\n");
        console.log("-----------");

        try {
            const nomeCartao = this.prompt("Informe o nome do cartão:");
            const datetime = this.promptUserForDateTime();

            new CadastrarCartao().executar(nomeCartao, datetime);
     
            console.log("Cartão cadastrado com sucesso.");

        } catch(e: any) {
            console.error(e.message);
        }     
    }

    private promptUserForDateTime(): Date {
        const choice = Number(this.prompt("Escolha uma opção:\n1) Data e hora atual\n2) Escolher data (dd-mm-yyyy hh:mm)"));
        if (choice === 1) {
            return new Date(); // Return current date and time
        } else if (choice === 2) {
            const chosenDateTime = this.prompt("Informe a data e hora (dd-mm-yyyy hh:mm):");
            const [datePart, timePart] = chosenDateTime.split(' ');
            const [day, month, year] = datePart.split('-').map(Number);
            const [hour, minute] = timePart.split(':').map(Number);
            return new Date(year, month - 1, day, hour, minute); // Return user-chosen date and time
        } else {
            console.log("Opção inválida. Utilizando data e hora atual por padrão.");
            return new Date(); // Return current date and time by default
        }
    }
}
