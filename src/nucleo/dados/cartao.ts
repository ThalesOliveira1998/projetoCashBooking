import Id from "./id";

export default class Cartao {

    constructor(readonly nome: string, 
    readonly id: string = Id.novo()) {}
}