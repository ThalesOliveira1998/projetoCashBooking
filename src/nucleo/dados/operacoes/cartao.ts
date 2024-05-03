import Id from "./id";

export default class Cartao {
    constructor(
    readonly nome: string, 
    readonly datetime: Date, 
    readonly id: string = Id.novo()) {}
}
