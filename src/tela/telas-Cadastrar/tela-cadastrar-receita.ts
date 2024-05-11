import Prompt from "prompt-sync";
import CadastrarReceita from "../../nucleo/fluxos/cadastros/cadastrar-receita";
import { TipoReceita } from "../../nucleo/dados/tipos/tipo-receita";

export default class TelaCadastrarReceita {
    private prompt = Prompt();
    
    exibir(){    
        console.log("Nova receita\n");
        console.log("-----------");

        const nomeReceita = this.prompt("Informe o nome da receita: ");
        console.log("Prompt: pressione 1 para salario");
        console.log("Prompt: pressione 2 para receita de investimento");
        console.log("Prompt: pressione 3 para Extra");
        console.log("Prompt: pressione 4 para Bonificação");
        const tipoReceitaChoice = this.prompt("Informe o tipo do gasto (1 para salario, 2 para receita de investimento, 3 para Extra, 4 para Bonificação): ");

        const tipoReceita = this.parseTipoReceita(tipoReceitaChoice);

        if (tipoReceita !== null) {
            const valorString = this.prompt("Informe o valor da receita: ");
            const valor = parseFloat(valorString);
            console.log("\nSelecione o registro em time")
            const datetime = this.promptUserForDateTime();


            new CadastrarReceita().executar(nomeReceita, tipoReceita, valor, datetime);
            console.log("Receita cadastrada com sucesso ");
        } else {
            console.log("Tipo da receita invalida");
        }
    }
    

    private parseTipoReceita(tipoReceitaString: string): TipoReceita | null {
        switch (tipoReceitaString.toLowerCase()) {
            case '1':
                return TipoReceita.SALARIO;
            case '2':
                return TipoReceita.INVESTIMENTO;
            case '3':
                return TipoReceita.EXTRA;
            case '4':
                return TipoReceita.BONIFICACAO;
            default:
                return null;
        }
    }
    private promptUserForDateTime(): Date {
        const choice = Number(this.prompt("Escolha uma opção:\n1) Data e hora atual\n2) Escolher data (dd-mm-yyyy hh:mm)\n Opção:"));
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