import { TipoGasto } from './../nucleo/dados/tipos/tipo-gasto';
import Prompt from "prompt-sync";
import CadastrarGasto from "../nucleo/fluxos/cadastros/cadastrar-gasto";

export default class TelaCadastrarGasto {
    private prompt = Prompt();
    
    exibir(){    
        console.log("Novo gasto\n");
        console.log("-----------");

        const nomeGasto = this.prompt("Informe o nome do gasto: ");
        console.log("Prompt: press 1 for alimentacao");
        console.log("Prompt: press 2 for transporte");
        const tipoGastoChoice = this.prompt("Informe o tipo do gasto (1 for alimentacao, 2 for transporte): ");

        const tipoGasto = this.parseTipoGasto(tipoGastoChoice);

        if (tipoGasto !== null) {
            const valor = this.prompt("Informe o valor do gasto: ");
            const local = this.prompt("Informe o local do gasto: ");
            console.log("\nSelecione o registro em time")
            const datetime = this.promptUserForDateTime();


            new CadastrarGasto().executar(nomeGasto, tipoGasto, valor, local, datetime);
            console.log("Gasto cadastrado com sucesso ");
        } else {
            console.log("Tipo de gasto inválido.");
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
}

// Segue abaixo outra implementação do codigo
// 
// 
// export default class TelaCadastrarGasto {
//     private prompt = Prompt();
//     private tipoGastoKeywords: { [keyword: string]: TipoGasto } = {
//         "hot dog": TipoGasto.ALIMENTACAO,
//         "pizza": TipoGasto.ALIMENTACAO,
//         "transporte": TipoGasto.TRANSPORTE,
//         "gasolina": TipoGasto.TRANSPORTE,
//     };
    
//     exibir(){    
//         console.log("Novo gasto\n");
//         console.log("-----------");

//         const nomeGasto = this.prompt("Informe o nome do gasto: ");
//         const tipoGastoInput = this.prompt("Informe o tipo do gasto: ");

//         const tipoGasto = this.getTipoGastoFromKeyword(tipoGastoInput);

//         if (tipoGasto !== null) {
//             const valor = this.prompt("Informe o valor do gasto: ");
//             const local = this.prompt("Informe o local do gasto: ");

//             new CadastrarGasto().executar(nomeGasto, tipoGasto, valor, local);
//             console.log("Gasto cadastrado com sucesso ");
//         } else {
//             console.log("Tipo de gasto não reconhecido.");
//         }
//     }

//     private getTipoGastoFromKeyword(keyword: string): TipoGasto | null {
//         const normalizedKeyword = keyword.toLowerCase();
//         return this.tipoGastoKeywords[normalizedKeyword] || null;
//     }
// }