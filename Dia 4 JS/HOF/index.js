const Conversão = (real, dolar) => {
    console.log("Você estará convertendo dólar para real")
    let Convertido = dolar * 5
    real(Convertido)
    return Convertido
}
let print = real => {
    console.log("Valor Convertido R$" +  real)
} 

let Convertido = Conversão(print, 5) 
    console.log(Convertido)

    

// function Conversão(real, dolar) {
//     console.log("Você estará convertendo dólar para real")
//     let Convertido = dolar * 4.6
//     real(Convertido)    
//     return Convertido
// }

