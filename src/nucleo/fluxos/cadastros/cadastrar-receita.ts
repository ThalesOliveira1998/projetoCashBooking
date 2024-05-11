import { TipoReceita } from './../../dados/tipos/tipo-receita';
import ReceitaBD from "../../../infra/receita-bd";
import Receita from "../../dados/operacoes/receita";

export default class CadastrarReceita {
    executar(
        nome: string,
        tipoDaReceita: TipoReceita,
        valorDaReceita: number,
        datetime: Date ){
            
        const novaReceita = new Receita (nome, tipoDaReceita, valorDaReceita, datetime) 
        ReceitaBD.salvar(novaReceita)
    }
}


