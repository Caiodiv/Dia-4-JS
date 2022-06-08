let navName = prompt("Qual é o nome da sua Nave?")

let velocity = 0 

let chosenOption 


function menuOption() {
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer?\n" +
                        "1- Acelerar a nave em 5km/s\n" +
                        "2- Desacelerar a nave em 5km/s\n" +
                        "3- Imprimir dados de bordo\n" +
                        "4- Sair de programa")
                            
    }
    return option
}

function accelerationOption(velocity1) {
    let newVelocity = velocity1 + 5
    return newVelocity 
}
function slowdownOption(velocity1) {
    let newVelocity = velocity1 - 5
    if (newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity

}
function showdata(navName, velocity1) {
    alert(navName + "\n" + velocity1)
}


    chosenOption = menuOption()
    do {
    switch (chosenOption) {
        case "1":
       velocity = accelerationOption(velocity)
        break

        case "2":
        velocity = slowdownOption(velocity)
        break

        case "3":
        showdata(navName, velocity)
        break

        default:
            alert("Encerrando programa")
            }

} while ( chosenOption != "4")












/* let nave = prompt("Qual o nome de sua nave?")
let velocidade = 0

function acelerar(velocidade,aceleração=5){
    velocidade+=aceleração;
    return velocidade;
}

function desacelerar(velocidade,aceleração=5){
    velocidade-=aceleração;
    return velocidade;
}

function printNave(nave, velocidade){
    alert("O nome da nave é: "+nave+" e a velocidade atual é: "+velocidade+"km/s")
}

do{
    menu = prompt("Qual opção você deseja escolher?\n1- Acelerar a nave em 5km/s\n2- Desacelerar em 5km/s\n3- Imprimir dados de bordo\n4- Sair" );

switch (menu) {
    case "1":
        velAção = "Acelerar Nave"
        velocidade=acelerar(velocidade)
        alert("Você acelerou a nave em: " +velocidade+ "km/s")
        break
    case "2":
        velAção = "Desacelerar a Nave"
        velocidade=desacelerar(velocidade)
        alert("Você desacelerou para: " +velocidade)
        break  
    case "3":
        printNave(nave, velocidade)
        break
    case"4":
        velAção = "Sair do programa"
        alert("Você está saindo do programa")
        break

        default: alert("Opção inválida! Clique em ok e escolha uma opção válida!")}          
}while(menu!="4")
*/