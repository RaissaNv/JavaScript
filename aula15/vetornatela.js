let valores = [4, 8, 3, 7, 7, 2]
valores.sort()

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for (pos = 0; pos < valores.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) { //versao simplificada do for para arrays e objects
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}