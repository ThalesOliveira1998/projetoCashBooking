import CartaoBD from "../../../infra/cartao-bd";
import Cartao from "../../dados/operacoes/cartao";

export default class ObterCartoes {
    executar(): Cartao [] {
       return CartaoBD.obter()
    }     
}
 



