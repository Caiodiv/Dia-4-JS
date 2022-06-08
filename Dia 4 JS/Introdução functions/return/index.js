function bankAccount (bills, cash = 5000) {
    restCash = cash - bills
    console.log("O seu saldo restante é de R$" + restCash)
    return restCash
}

bankAccount(1500, 5000)