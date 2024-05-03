import GastoBD from "../../../infra/gasto-bd";
import Gasto from "../../dados/operacoes/gasto";


export default class ObterGastos {
    executar(): Gasto [] {

       return GastoBD.obter()
    }
}