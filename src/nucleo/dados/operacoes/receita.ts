import Id from "./id";
import { TipoReceita} from "../tipos/tipo-receita";

export default class Receita {
    constructor(
    readonly nome: string, 
    readonly tipoReceita:TipoReceita,
    readonly valor: number,
    readonly datetime: Date, 
    readonly id: string = Id.novo()) {}
}
