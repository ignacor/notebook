// const d = document
// const cuerpo = d.body
// cuerpo.style.display = 'flex'
// cuerpo.style.justifyContent = 'center'
// cuerpo.style.alignItems = 'center'
// cuerpo.style.backgroundColor = 'white'

// const contit = d.createElement('div')
// contit.style.display = 'flex'
// contit.style.justifyContent = 'center'
// const h1xd = d.createElement('h1')
// h1xd.style.color = 'red'
// h1xd.id = 'titu'
// contit.append(h1xd)

// const brxd = d.createElement('br')
// cuerpo.prepend(brxd)
// cuerpo.prepend(contit)

// const contenedor = d.createElement('div')
// cuerpo.appendChild(contenedor)

// const form1 = d.createElement('form')
// contenedor.appendChild(form1)

// const nombre = d.createElement('input')
// nombre.type = 'name'
// nombre.placeholder = 'Nombre'
// form1.append(nombre)

// const br2 = d.createElement('br')
// form1.append(br2)

// const mail = d.createElement('input')
// mail.type = 'gmail'
// mail.placeholder = 'Correo'
// form1.appendChild(mail)

// const pass = d.createElement('input')
// pass.type = 'password'
// pass.placeholder = 'Contraseña'
// contenedor.appendChild(pass)

// const br = d.createElement('br')
// contenedor.appendChild(br)


// const btn = d.createElement('input')
// btn.type = 'button'
// btn.style.width = '100%'
// btn.style.marginTop = '15px'
// btn.id = 'boton'
// btn.value = 'Inicia Sesion'
// contenedor.appendChild(btn)


// d.querySelector("#boton").addEventListener("click",prueba);

// function prueba(){

// d.querySelector("#titu").innerHTML = 'Bienvenio/a Señor/ra'+ nombre.value

// }
///// Variables Generales /////////
const d = document
const c = d.body

//////Titulo Variables/////////
const titcont = d.createElement('div')

const h1xd = d.createElement('h1')
titcont.append(h1xd)

/////// Formulario Variables /////////
const contform = d.createElement('div')

const formu = d.createElement('form')
contform.append(formu)

const labname = d.createElement('label')
formu.append(labname)

const inputname = d.createElement('input')
formu.append(inputname)

const br1 = d.createElement('br')
formu.append(br1)

const labmail = d.createElement('label')
formu.append(labmail)

const inputmail = d.createElement('input')
formu.append(inputmail)

const br2 = d.createElement('br')
formu.append(br2)

const labpass = d.createElement('label')
formu.append(labpass)

const inputpass = d.createElement('input')
formu.append(inputpass)

const br3 = d.createElement('br')
formu.append(br3)

const boton = d.createElement('input')
formu.append(boton)
/////// Estilo Body /////
c.style.backgroundColor = 'black'
////// Estilo Titulo ////

titcont.style.marginTop = '50px'
titcont.style.color = '#d20c0c'
titcont.style.textAlign = 'center'
h1xd.innerHTML = 'Rellena tus datos para Iniciar Sesion!!!'

/////// Estilo Formulario/////////

contform.style.marginTop = '100px'
contform.style.display = 'flex'
contform.style.alignItems = 'center'
contform.style.justifyContent = 'center'

labmail.style.color = '#d20c0c'
labmail.classList = 'fa-solid fa-envelope'

labname.style.color = '#d20c0c'
labname.style.marginRight = '2px'
labname.classList = 'fa-solid fa-user'

labpass.style.color = 'd20c0c'
labpass.style.marginRight = '2px'
labpass.classList = 'fa-solid fa-lock'


inputname.type = 'text'
inputname.placeholder = 'Nombre'



inputmail.type = 'gmail'
inputmail.placeholder = 'Direccion de E-mail'





inputpass.type = 'password'
inputpass.placeholder = 'Contraseña'

boton.type = 'button'
boton.value = 'Iniciar Sesion'
boton.style.width = '100%'
boton.style.marginTop = '5px'
boton.id = 'botonxd'


boton.addEventListener('click', prueba)
function prueba (){



}






















c.prepend(contform)
c.prepend(titcont)





























