
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML= `Agora sao ${hora} horas.`

    if ( hora >= 0 && hora < 12 ) {
        img.src = 'assets/images/fotomanha.png'
        document.body.style.background = '#FED6C4'
    } else if ( hora >= 12 && hora <= 18 ) {
        img.src = 'assets/images/fototarde.png'
        document.body.style.background = '#99BACC'
    } else {
        img.src = 'assets/images/fotonoite.png'
        document.body.style.background = '#2E2E43'
    }
}


//manha #FED6C4
// noite #2E2E43

//tarde #99BACC