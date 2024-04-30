import GastoBD from "../../infra/gasto-bd";
import Gasto from "../dados/gasto";
import { TipoGasto } from "../dados/tipo-gasto";

export default class CadastrarGasto {
    executar(nome: string,tipoDoGasto: TipoGasto, valorDoGasto: string,localDoGasto: string,){
        const novoGasto = new Gasto (nome, tipoDoGasto, valorDoGasto, localDoGasto) 
        GastoBD.salvar(novoGasto)
    }
}
