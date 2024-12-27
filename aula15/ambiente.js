let num = [5, 9, 2, 5, 8]
num.push(6)
num.sort()
console.log(num)
console.log(num.length)
console.log(num[0])
let pos = num.indexOf(2)
if (pos == -1) {
    console.log('Esse valor noa existe')
} else {
    console.log(`o valor 9 esta na posicao ${pos}`)
}
