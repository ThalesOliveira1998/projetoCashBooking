import ObterReceitas from "../../nucleo/fluxos/obter/obter-receitas";

export default class TelaObterReceitas {
    exibir(){    
        console.log("Lista de receitas\n")
        console.log("-----------")

       const receitas = new ObterReceitas().executar()
       for(const receita of receitas){
        console.log(`${receita.id} - ${receita.nome}- ${receita.valor} - ${receita.tipoReceita} - ${receita.datetime} - ${receita.tipoReceita}`)
       }
    
    }
}

