import Id from "./id";
import { tipoReceita } from "../tipos/tipo-receita";

export default class Receita {
    constructor(
    readonly nome: string, 
    readonly tipoReceita:tipoReceita,
    readonly valor: number,
    readonly datetime: Date, 
    readonly id: string = Id.novo()) {}
}
