const cuerpo = document.body

const capucha = document.createElement('header')
cuerpo.prepend(capucha)

const titulo = document.createElement('h1')
titulo.innerText = 'Valorant Boosting'
capucha.appendChild(titulo)

const nave = document.createElement('nav')
capucha.appendChild(nave)

const ul = document.createElement('ul')
nave.appendChild(ul)

const li1 = document.createElement('li')
const a1 = document.createElement('a')
a1.innerText = 'Boosting'
a1.href = 'instagram.com'
ul.appendChild(li1)
li1.appendChild(a1)

const li2 = document.createElement('li')
const a2 = document.createElement('a')
a2.innerText = 'Contacto'
a2.href = 'instagram.com'
ul.appendChild(li2)
li2.appendChild(a2)

const li3 = document.createElement('li')
const a3 = document.createElement('a')
a3.innerText = 'Inicia Sesion'
a3.href = 'instagram.com'
ul.appendChild(li3)
li3.appendChild(a3)

// estilo //

capucha.style.backgroundColor = 'black'
cuerpo.style.margin = '0px'

//h1//
titulo.style.color = '#d20c0c'
titulo.display ='flex'
titulo.justifyContent = 'center'
titulo.alignItems = 'center'
//nav//
ul.style.display = 'flex'
ul.style.alignItems = 'center'
ul.style.justifyContent ='space-between'
//a//
a1.style.color = 'd2c0c0'
a1.style.textDecoration = 'none'

a2.style.color = 'd2c0c0'
a2.style.textDecoration = 'none'

a3.style.color = 'd2c0c0'
a3.style.textDecoration = 'none'







