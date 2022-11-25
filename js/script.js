/*PROBLEMA: JS-BIGLIETTO TRENO

1 - chiedere all'utente il numero di chilomentri da percorrere 
2 - chiedere l'età dell'utente
3 - calcolare costo biglietto 
    3.1 - moltiplicare numero chilometri percorsi per 0.21
4 -  SE l'utente è minoerenne 
    applicare lo sconto del 20%
        costo biglietto * 0.80 

    SE l'utente è over 65 
    applicare lo sconto del 40%
        costo biglietto * 0.60
    
    ALTRIMENTI 
    l'utente paga il costo biglietto intero 

5 - stampare il prezzo da pagare con massimo 2 decimali*/

//1 - chiedere all'utente il numero di chilomentri da percorrere //

const num_km = parseInt(prompt('Quanti Chilometri devi percorrere?'))

console.log(num_km)

//2 - chiedere l'età dell'utente//
const eta = parseInt(prompt('quanti anni hai?'))

console.log(eta)

//3 - calcolare costo biglietto 
const costo = num_km * 0.21
console.log(costo)

//4 -  SE l'utente è minoerenne 
if (eta < 18){
    let sconto = costo * 0.80
    console.log(sconto)
}else if(eta >= 65){
    let sconto = costo * 0.60 
    console.log(sconto)
}
else {
   sconto = costo 
    console.log(costo)
}

//5 - stampare il prezzo da pagare con massimo 2 decimali*/
const costo_arrot = costo.toFixed(2)

console.log(costo_arrot)