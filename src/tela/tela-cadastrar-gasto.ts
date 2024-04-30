import { TipoGasto } from './../nucleo/dados/tipo-gasto';
import Prompt from "prompt-sync";
import CadastrarGasto from "../nucleo/fluxos/cadastrar-gasto";

export default class TelaCadastrarGasto {
    private prompt = Prompt();
    
    exibir(){    
        console.log("Novo gasto\n");
        console.log("-----------");

        const nomeGasto = this.prompt("Informe o nome do gasto: ");
        const tipoGastoString = this.prompt("Informe o tipo do gasto: ");

        // Assuming you have a method to parse string to TipoGasto
        const tipoGasto: TipoGasto | null = this.parseTipoGasto(tipoGastoString);

        if (tipoGasto !== null) {
            const valor = this.prompt("Informe o valor do gasto: ");
            const local = this.prompt("Informe o local do gasto: ");

            new CadastrarGasto().executar(nomeGasto, tipoGasto, valor, local);
            console.log("Gasto cadastrado com sucesso ");
        } else {
            console.log("Tipo de gasto inválido.");
        }
    }

    private parseTipoGasto(tipoGastoString: string): TipoGasto | null {
        // Implement logic to parse string to TipoGasto enum
        // Return null if the string does not match any type
        switch (tipoGastoString.toLowerCase()) {
            case 'alimentacao':
                return TipoGasto.ALIMENTACAO;
            case 'transporte':
                return TipoGasto.TRANSPORTE;
            // Add cases for other types if needed
            default:
                return null;
        }
    }
}
// export default class TelaCadastrarGasto {
//     private prompt = Prompt();
//     private tipoGastoKeywords: { [keyword: string]: TipoGasto } = {
//         "hot dog": TipoGasto.ALIMENTACAO,
//         "pizza": TipoGasto.ALIMENTACAO,
//         "transporte": TipoGasto.TRANSPORTE,
//         "gasolina": TipoGasto.TRANSPORTE,
//         // Add more keywords and corresponding TipoGasto values as needed
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