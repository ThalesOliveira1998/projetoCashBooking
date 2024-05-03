import GastoBD from "../../../infra/gasto-bd";
import Gasto from "../../dados/operacoes/gasto";
import { TipoGasto } from "../../dados/tipos/tipo-gasto";

export default class CadastrarGasto {
    executar(
        nome: string,
        tipoDoGasto: TipoGasto,
        valorDoGasto: string,
        localDoGasto: string,
        datetime: Date ){
            
        const novoGasto = new Gasto (nome, tipoDoGasto, valorDoGasto, localDoGasto, datetime) 
        GastoBD.salvar(novoGasto)
    }
}
