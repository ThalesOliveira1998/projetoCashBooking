import Cartao from "./cartao";
import Id from "./id";
import { TipoRegistro } from "./tipo-registro";

export default class Registro {
    constructor(
        readonly nome: string,
        readonly valor: number,
        readonly cartao: Cartao | null = null,
        readonly id: string = Id.novo()
    ) {}

    get tipo(): TipoRegistro {
        return this.valor > 0 ? TipoRegistro.CREDITO : TipoRegistro.DEBITO
    }
}