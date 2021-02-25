/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/


numero_secondi = 12560
ore = Math.floor(numero_secondi / (60 * 60))
minuti = Math.floor(numero_secondi / 60) - ore * 60
secondi = numero_secondi - ore * 60 * 60 - minuti * 60

console.log("ore: " + ore)
console.log("minuti: " + minuti)
console.log("secondi: " + secondi)