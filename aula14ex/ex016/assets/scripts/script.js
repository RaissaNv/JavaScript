 function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar.'
        window.alert('[ERRO] Faltam dados.')
    } else {
        res.innerHTML = 'Contando: <br>'
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)

        if( pas <= 0) {
            window.alert('Passo invalido. Considerando passo 1')
            pas = 1
        } else if (ini < fi) {
            //COntagem crescente
            for(let cont = ini; cont <= fi; cont += pas) {
            res.innerHTML += `${cont} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for(let cont = ini; cont >= fi; cont -= pas) {
                res.innerHTML += `${cont} \u{1F449}`
            }
                
        }
        res.innerHTML += `\u{1F3C1}`
    }
 }