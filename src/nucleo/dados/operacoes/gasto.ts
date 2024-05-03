import { TipoGasto } from './../tipos/tipo-gasto';
import Id from "./id";

export default class Gasto {

    constructor(
    readonly nome: string, 
    readonly tipoDoGasto: TipoGasto,
    readonly valorDoGasto: string,
    readonly localDoGasto: string,
    readonly datetime: Date, 
    readonly id: string = Id.novo()) {}


    get tipoGasto(): TipoGasto {
        return TipoGasto.DEFAULT;
    }
}