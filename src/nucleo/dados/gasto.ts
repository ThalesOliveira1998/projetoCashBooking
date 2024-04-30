import Id from "./id";
import { TipoGasto } from "./tipo-gasto";

export default class Gasto {

    constructor(
    readonly nome: string, 
    readonly tipoDoGasto: TipoGasto,
    readonly valorDoGasto: string,
    readonly localDoGasto: string,
    readonly id: string = Id.novo()) {}


    get tipoGasto(): TipoGasto {
        return TipoGasto.DEFAULT;
    }
}