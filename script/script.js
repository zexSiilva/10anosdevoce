function carregar() {

    var data = new Date()
    var ano  = data.getFullYear()
    var mes  = data.getMonth()
    var dia  = data.getDay()
    var hora = data.getHours()
    var min  = data.getMinutes()
    var msg  = document.getElementById('msg')
    var bdia = document.getElementById('bdiah1')


    
    // Saudação (bom dia, tarde, noite e madrugada)

    if (hora >= 18) {
        bdia.innerHTML = `Boa noite`
    } else if (hora > 12 && hora < 17 ) {
        bdia.innerHTML = `Boa tarde`
    } else if (hora <= 4) {
        bdia.innerHTML = `Boa madrugada`
    } else {
        bdia.innerHTML = `Bom dia`
    }

    // formatando a data

        // var data = new Date()
        // alert(data)
    function formatarData(data){ 
        var newDate = new Date(data)
        return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
    }
    // alert(formatarData(data))

    // calculando a diferença de dias entre datas
    
    // var dataAtual = new Date()
    
    var dataNamoro2012 = new Date(2012, 07, 20) 
    var dataEmMS = Math.abs(data - dataNamoro2012)
    var diasDeDiferenca = Math.trunc(dataEmMS / (1000 * 60 * 60 * 24))
    var mesesDeDiferenca = Math.trunc(diasDeDiferenca / 30.416)
         if (mesesDeDiferenca >= 120) {
            mesesDeDiferenca = mesesDeDiferenca - 120 
    } 
    var anosDeDiferenca = Math.trunc(diasDeDiferenca/365)
    var diasDeDiferenca30 = diasDeDiferenca
        if (diasDeDiferenca30 >= 3650 && diasDeDiferenca30 < 3680) { 
            diasDeDiferenca30 = diasDeDiferenca30 - 3650
        } else if (diasDeDiferenca30 >= 3680 && diasDeDiferenca30 < 3710) { 
            diasDeDiferenca30 = diasDeDiferenca30 - 3680
        } else if (diasDeDiferenca30 >= 3710) { 
            diasDeDiferenca30 = diasDeDiferenca30 - 3710

    }
    



    msg.innerHTML = `Hoje faz ${anosDeDiferenca} anos, ${mesesDeDiferenca} meses e ${diasDeDiferenca30} dias que você é o amor da minha vida!<br>E em nenhum desses ${diasDeDiferenca} dias eu deixei de pensar em você.`


}