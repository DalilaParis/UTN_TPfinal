//Quiero obtener una lista a partir de la de productos donde cada elemento sea un nombre del producto
  //['tv samsung 32'...]
  
  //JS nos ofrece a map, map sirve para transformar mi array en otro array
  //Retorna un array
  //siempre retorna un array con la misma cantidad de elementos que el array original
  //map recibe una funcion, dicha funcion se invocara por cada elemento del array
  //map le pasara a la funcion/callback el producto que se esta recorriendo
  //el retorno de la callback sera almacenado en un nuevo array y retornado. Osea este es el retorno de map

  const resultado = lista_productos.map(
    //Funcion anonima en flecha. Sirve si queremos declarar la funcion en el mismo parametro de la funcion
    //A las funciones que las pasamos por parametro las llamamos callbacks
    (parametro) => {
      console.log("me ejecuto")
      console.log(parametro)
      return parametro.name
    }
  )

  console.log(resultado)