/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/




//variabili
numero_gatti = 36
gatti_in_fila = 12

//calcolo delle file
numero_file = Math.ceil(numero_gatti / gatti_in_fila)
//calcolo dei gatti che mancano nell'ultima fila
gatti_mancanti = numero_file * gatti_in_fila - numero_gatti

console.log("numero totale di gatti: " + numero_gatti)
console.log("gatti in una fila: " + gatti_in_fila)
console.log("file di gatti: " + numero_file)
console.log("gatti mancanti nell'ultima fila: " + gatti_mancanti)