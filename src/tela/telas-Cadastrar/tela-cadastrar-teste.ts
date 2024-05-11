import { TipoGasto } from '../../nucleo/dados/tipos/tipo-gasto';
import Prompt from "prompt-sync";
import CadastrarGasto from "../../nucleo/fluxos/cadastros/cadastrar-gasto";

export default class TelaCadastrarTeste {
    private prompt = Prompt();
    
    exibir(){    
        console.log("Novo gasto\n");
        console.log("-----------");

        const nomeGasto = this.prompt("Informe o nome do gasto: ");

        // Automatically determine the type of expense based on the name
        let tipoGasto = this.determineTipoGasto(nomeGasto);

        console.log(`Tipo de gasto sugerido: ${tipoGasto}`);

        // Ask the user if they want to confirm or change the suggested type
        const confirmTipoGasto = this.prompt("Press 'Y' to confirm or any other key to change the type: ");
        if (confirmTipoGasto.toUpperCase() !== 'Y') {
            console.log("Prompt: press 1 for alimentacao");
            console.log("Prompt: press 2 for transporte");
            const tipoGastoChoice = this.prompt("Informe o tipo do gasto (1 for alimentacao, 2 for transporte): ");
            const parsedTipoGasto = this.parseTipoGasto(tipoGastoChoice);
            if (parsedTipoGasto === null) {
                console.log("Tipo de gasto inválido.");
                return;
            } else {
                tipoGasto = parsedTipoGasto; // Assign the parsed tipoGasto
            }
        }

        const valor = this.prompt("Informe o valor do gasto: ");
        const local = this.prompt("Informe o local do gasto: ");
        console.log("\nSelecione o registro em time");
        const datetime = this.promptUserForDateTime();

        new CadastrarGasto().executar(nomeGasto, tipoGasto, valor, local, datetime);
        console.log("Gasto cadastrado com sucesso ");
    }

    private determineTipoGasto(nomeGasto: string): TipoGasto {
        // Your logic to determine the type of expense based on the name
        // For example:
        if (nomeGasto.toLowerCase().includes('comida') || nomeGasto.toLowerCase().includes('restaurante')) {
            return TipoGasto.ALIMENTACAO;
        } else if (nomeGasto.toLowerCase().includes('transporte') || nomeGasto.toLowerCase().includes('gasolina')) {
            return TipoGasto.TRANSPORTE;
        } else {
            // Default to some type if none of the criteria match
            return TipoGasto.OUTROS;
        }
    }

    private parseTipoGasto(tipoGastoString: string): TipoGasto | null {
        switch (tipoGastoString.toLowerCase()) {
            case '1':
                return TipoGasto.ALIMENTACAO;
            case '2':
                return TipoGasto.TRANSPORTE;
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

    // Rest of your code...
}
