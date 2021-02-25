/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/


anno_corrente = 2021
anno_nascita = 1973

eta = anno_corrente - anno_nascita
anni_mancanti = 100 - eta

console.log("Età: " + eta)
console.log("Anni per arrivare a 100: " + anni_mancanti)