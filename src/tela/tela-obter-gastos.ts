import ObterGastos from "../nucleo/fluxos/obter-gastos";

export default class TelaObterGastos {
    exibir(){    
        console.log("Lista de Gastos\n")
        console.log("-----------")

       const gastos = new ObterGastos().executar()
       for(const gasto of gastos){
        console.log(`${gasto.id} - ${gasto.nome} - ${gasto.localDoGasto} - ${gasto.tipoDoGasto} - ${gasto.valorDoGasto}`)
       }
    
    }
}