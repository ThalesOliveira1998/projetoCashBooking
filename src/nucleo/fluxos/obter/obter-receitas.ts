import RecitaBD from "../../../infra/receita-bd";
import Receita from "../../dados/operacoes/receita";


export default class obterReceitas {
    executar(): Receita [] {

       return RecitaBD.obter()
    }
}