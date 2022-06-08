function slowDown(velocity, printer) {
    let Desaceleration = 20
    while (velocity >= 0) {
        printer(velocity)
        velocity -= Desaceleration
    }
   
}

alert("A nave parou! As comportas já podem ser abertas.")

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity) {
    console.log("Desacelerando: " + velocity)
})





















// function slowDown(velocity, printer) {
//     let newVelocity = velocity
//     do {
//          printer(newVelocity)
//         newVelocity -= 20
//     } while (newVelocity >= 0);
//      return newVelocity
//  }


//  alert("A nave parou! As comportas já podem ser abertas.")
