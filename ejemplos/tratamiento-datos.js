/*((name) => {
const helloworld = 'hola'
console.log (name)
}
)()*/

/*(() =>{
  let user = null
  if(user){
    console.log('hay users')
  }else {
      console.log('No hay users')
    }
  }
)()*/

/*(() => {
  let users= [1, 'Carlos',true, 'Ana','Migel',null, 'Juan']
  /*console.log('Users :' , users)*/
/*console.log(users[0])

})()*/

/*(() =>{
  let product = [1, 'Game Name', '2024-15-15','2025-12-2','20224-8-12' ]
  let [productID, productName, productCreatedAt, productUpdateAt, productDeleteAt] = product

  console.log(productID)
  console.log(productName)
  console.log(productCreatedAt)
  console.log(productUpdateAt)
  console.log(productDeleteAt)

  console.log(productID, productName,productCreatedAt,productUpdateAt,productDeleteAt)

}
)()*/

/*(()=> {

    let product = "Aceite de oliva 0.4º CARBONELL, botella 1 litro, $14 "
    let [productName, format, price] = product.split(',')

    /*replace('$', ''): Quita el símbolo del dólar.
    trim(): Elimina espacios en blanco adicionales si los hubiera.
    parseFloat(): Convierte la cadena resultante en un número de tipo flotante.*/
    //let dollarPrice = parseFloat(price.replace('$', '').trim());

    /*Definimos una tasa de conversión de 1 dólar a 0.93 euros */
    //let conversionRate = 0.93;

    /*Multiplicamos el precio en dólares por la tasa de conversión y utilizamos .toFixed(2) para asegurar que el precio en euros tenga solo dos decimales.*/

   /* let euroPrice = (dollarPrice * conversionRate).toFixed(2);

    console.log(productName)
    console.log(format)
    console.log(price.replace("$","€"))
    console.log(`€${euroPrice}`);

})()*/


/*(()=> {

  let names = ["Ana", "Carlos", "Beatriz", "David", "Elena","Fernando", "Gabriela", "Hugo", "Isabel", "Javier","Karla", "Luis", "María", "Nicolás", "Olga","Pedro", "Quintina", "Ricardo", "Sofía", "Tomás"
];
  console.log (names.length)

  // ejemplo bucle forEach (mas cumunmente ocupado en programacion web)
  names.forEach(name => {
    const upperCaseName = name.toUpperCase()
    const userName = "USER_" + upperCaseName
    console.log(userName)
  })

  // Ejemplo bucle for 
  for (let i =0; i < names.length; i++) {
    console.log(names[i])
  }

  // Ejemplo bucle while (Utilizado mas comunmente en robotica/domotica/scrapping)
  let i = 0
  while( i <names.length){
    console.log("USER_" +names[i])
    i++
  }

})()*/

// fs/promises (libreria especializada en leer archivos - propia de js)

/*(async()=> {
  const fs = require ('fs/promises')
  const file = await fs.readFile('./MOCK_DATA.json','utf-8')
  const data = JSON.parse(file)

  console.log(data)
}

)()*/


// Manipulacion de Datos MAP */
(()=> {
  const data = [
  {
    id: 97,
    first_name: 'Baryram',
    last_name: 'Tummond',
    email: 'btummond2o@reuters.com',
    gender: 'male',
    ip_address: '233.46.77.68',
     age:'32'
  },
  {
    id: 98,
    first_name: 'Mord',
    last_name: 'Coomber',
    email: 'mcoomber2p@cbc.ca',
    gender: 'male',
    ip_address: '2.141.7.46',
     age:'18'
  },
  {
    id: 100,
    first_name: 'Edee',
    last_name: 'Gherardesci',
    email: 'egherardesci2r@ucsd.edu',
    gender: 'Female',
    ip_address: '103.198.16.197',
    age:'51'
  },
  ]
   //Manera de declarar con foreach
//   const newArray = [] //declaras nuevo elemento array vacio

//   data.forEach(element =>
//   newArray.push(
//     {
//     first_name: element.first_name,
//     gender: element.gender,
//     }
//   )
// )


//Utlizacion de Map
const newArray = data.map(element => {
  return{
    Nombre: element.first_name + ' ' + element.last_name,
    Sexo: element.gender.toLowerCase() === 'male' 
    ? 'hombre' 
    : element.gender.toLowerCase() === 'female'
    ? 'mujer'
    : 'indiferente'
    
  }

})

console.log(newArray)

//Utilizacion reduce para enseñar media d edad

// const totalAge = data.reduce((acc, element) =>{
//   return acc + parseFloat(element.age)  // Suma la edad convertida a número flotante
// },0)// El acumulador comienza en 0

// const averageAge = (totalAge / data.length).toFixed(2); // Divide la suma por el número de elementos y limita a dos los decimales

// console.log(`Suma total de edades: ${totalAge}`);
// console.log(`Media de edades: ${averageAge}`);
// })()

