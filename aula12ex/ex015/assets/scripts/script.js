function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('txtsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.getAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 15){
                //crianca
                img.setAttribute('src', 'assets/images/crianca-m.jpg')
            } else if (idade < 49){
                //adulto
                img.setAttribute('src', 'assets/images/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'assets/images/idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 15){
                //crianca
                img.setAttribute('src', 'assets/images/crianca-f.jpg')
            } else if (idade < 49){
                //adulto
                img.setAttribute('src', 'assets/images/adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'assets/images/idoso-m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}