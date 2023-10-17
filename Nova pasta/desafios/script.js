function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src', 'criancahomem.png')

        } else if (idade < 21){
            img.setAttribute('src', 'jovemhomem.png')

        }
        //jovem
        else if (idade < 50) {
            img.setAttribute('src', 'adultohomem.png')

        } else {
            img.setAttribute('src', 'idosohomem.png')
            //idoso
        }

       } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade < 10) {
            img.setAttribute('src', 'criancamulher.png')
            //criança

        } else if (idade < 21){
            img.setAttribute('src', 'jovemmulher.png')

        }
        //jovem
        else if (idade < 50) {
            img.setAttribute('src', 'adultomulher.png')

        } else {
            img.setAttribute('src', 'idosomulher.png')
            //idoso
        }

       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)

    }
}