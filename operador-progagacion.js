const persona_1 = {
  nombre: 'pepe',
  dinero: 10
}


//Clonamos a la persona_1
const persona_2 = {...persona_1, edad: 89, nombre: 'pepesito'}

persona_1.nombre = 'maria'

console.log('persona 1', persona_1)

console.log('persona 2', persona_2)

const lista_mensajes = [
  {mensaje: 'hola'},
  {mensaje: 'Ciaoo'}
]

const lista_mensajes_clonada = [...lista_mensajes, {mensaje: 'Soy un mensaje nuevo!!'}]

lista_mensajes_clonada.push({mensaje: 'pepesito'})

console.log(lista_mensajes)
console.log(lista_mensajes_clonada)