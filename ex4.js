/**
 * indexOF
 */

 /**
  * LA función indexOf es muy usada en JavaScript; y en otros lenguajes de programación hay funciones similares. Sirve para indicar, en que posición se encuentra un elemento en un array
  */

 let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"]
 let pezPosicion = muchos_peces.indexOf("Nemo")
 console.log("Nemo está en la posición: " + pezPosicion)

 /**
  * Fíjate sin embargo qué valor arroja aplicar indexOf cuando buscamos a "estrella". CONTESTA: ¿Por qué crees que sucede esto?
  */

  let pezPosicion2 = muchos_peces.indexOf("Estrella")
  console.log("Estrella está en la posición: " + pezPosicion2)

  /* Porque "estrella" estaba en minusculas y no se encuentra en el array y javascript es un lenguaje que diferencia las mayusculas de las minusculas por lo tanto es mas propenso a errores como este */
