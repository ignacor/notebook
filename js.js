// Variables Generales//
const d = document
const c = d.body

//Estilo General//

c.style.backgroundColor = '#222222'
c.style.display = 'flex'
c.style.justifyContent = 'center'
c.style.alignItems = 'center'



// Contenedor Rango Actual //

const contRa = d.createElement('div')
c.append(contRa)

const h1Ra = d.createElement('h1')
contRa.append(h1Ra)

const contBtnRa = d.createElement('div')
contRa.append(contBtnRa)

// Estilo Contnedores RA //
contRa.style.width = '40%'
contRa.style.height = '50%'
contRa.style.backgroundColor = 'Black'
contRa.style.borderRadius = '25px'
contRa.style.marginRight = '10px'

h1Ra.innerText = 'Rango Actual'
h1Ra.style.color = '#d20c0c'
h1Ra.style.fontSize = '25px'
h1Ra.style.textAlign = 'Center'

contBtnRa.style.backgroundColor = 'rgb(15,15,15)'
contBtnRa.style.width = '90%'
contBtnRa.style.height = '70%'
contBtnRa.style.borderRadius = '20px'
contBtnRa.style.marginLeft = '5%'
contBtnRa.style.display = 'grid'
contBtnRa.style.gridTemplateColumns = 'repeat(3,5fr)'
contBtnRa.style.gridTemplateRows = 'repeat(3, fr)'
contBtnRa.style.columnGap = '50px'
contBtnRa.style.gridRowGap = '0px'

// Variables Botones RA //

const btnHierro1 = d.createElement ('input')
btnHierro1.type = 'button'
btnHierro1.id = 'hierroxd'
contBtnRa.append(btnHierro1)

const btnBronce1 = d.createElement ('input')
btnBronce1.type = 'button'
btnBronce1.id = 'broncexd'
contBtnRa.append(btnBronce1)

const btnPlata1 = d.createElement ('input')
btnPlata1.type = 'button'
btnPlata1.id = 'plataxd'
contBtnRa.append(btnPlata1)

const btnOro1 = d.createElement ('input')
btnOro1.type = 'button'
btnOro1.id = 'oroxd'
contBtnRa.append(btnOro1)

const btnPlatino1 = d.createElement ('input')
btnPlatino1.type = 'button'
btnPlatino1.id = 'platinoxd'
contBtnRa.append(btnPlatino1)

const btnDiamante1 = d.createElement ('input')
btnDiamante1.type = 'button'
btnDiamante1.id = 'diamantexd'
contBtnRa.append(btnDiamante1)

const btnAscendente1 = d.createElement ('input')
btnAscendente1.type = 'button'
btnAscendente1.id = 'ascendentexd'
contBtnRa.append(btnAscendente1)

const btnInmortal1 = d.createElement ('input')
btnInmortal1.type = 'button'
btnInmortal1.id = 'inmortalxd'
contBtnRa.append(btnInmortal1)

const btnRadiante1 = d.createElement ('input')
btnRadiante1.type = 'button'
btnRadiante1.id = 'radiantexd'
contBtnRa.append(btnRadiante1)

// Estilo Botones RA //

btnHierro1.style.borderRadius = '15px'
btnHierro1.style.border = '#d20c0c'
btnHierro1.style.backgroundColor = 'rgb(15,15,15)'

btnBronce1.style.borderRadius = '15px'
btnBronce1.style.border = 'rgb(15,15,15)'
btnBronce1.style.backgroundColor = 'rgb(15,15,15)'

btnPlata1.style.borderRadius = '15px'
btnPlata1.style.border = 'rgb(15,15,15)'
btnPlata1.style.backgroundColor = 'rgb(15,15,15)'

btnOro1.style.borderRadius = '15px'
btnOro1.style.border = 'rgb(15,15,15)'
btnOro1.style.backgroundColor = 'rgb(15,15,15)'

btnPlatino1.style.borderRadius = '15px'
btnPlatino1.style.border = 'rgb(15,15,15)'
btnPlatino1.style.backgroundColor = 'rgb(15,15,15)'

btnDiamante1.style.borderRadius = '15px'
btnDiamante1.style.border = 'rgb(15,15,15)'
btnDiamante1.style.backgroundColor = 'rgb(15,15,15)'

btnAscendente1.style.borderRadius = '15px'
btnAscendente1.style.border = 'rgb(15,15,15)'
btnAscendente1.style.backgroundColor = 'rgb(15,15,15)'

btnInmortal1.style.borderRadius = '15px'
btnInmortal1.style.border = 'rgb(15,15,15)'
btnInmortal1.style.backgroundColor = 'rgb(15,15,15)'

btnRadiante1.style.borderRadius = '15px'
btnRadiante1.style.border = 'rgb(15,15,15)'
btnRadiante1.style.backgroundColor = 'rgb(15,15,15)'


// Contenedor Rango Deseado //

const contRd = d.createElement('div')
c.append(contRd)

const h1Rd = d.createElement('h1')
contRd.append(h1Rd)

const contBtnRd = d.createElement('div')
contRd.append(contBtnRd)
contBtnRd.style.display = 'grid'
contBtnRd.style.gridTemplateColumns = 'repeat(3,5fr)'
contBtnRd.style.gridTemplateRows = 'repeat(3, fr)'
contBtnRd.style.columnGap = '50px'
contBtnRd.style.gridRowGap = '0px'


// Estilo Contnedores RD //
contRd.style.width = '40%'
contRd.style.height = '50%'
contRd.style.backgroundColor = 'Black'
contRd.style.borderRadius = '25px'
contRd.style.marginLeft = '10px'

h1Rd.innerText = 'Rango Deseado'
h1Rd.style.color = '#d20c0c'
h1Rd.style.fontSize = '25px'
h1Rd.style.textAlign = 'Center'

contBtnRd.style.backgroundColor = 'rgb(15,15,15)'
contBtnRd.style.width = '90%'
contBtnRd.style.height = '70%'
contBtnRd.style.borderRadius = '20px'
contBtnRd.style.marginLeft = '5%'

// Variables Botones RD //

const btnHierro2 = d.createElement ('input')
btnHierro2.type = 'button'
btnHierro2.id = 'hierroxd'
contBtnRd.append(btnHierro2)

const btnBronce2 = d.createElement ('input')
btnBronce2.type = 'button'
btnBronce2.id = 'broncexd'
contBtnRd.append(btnBronce2)

const btnPlata2 = d.createElement ('input')
btnPlata2.type = 'button'
btnPlata2.id = 'plataxd'
contBtnRd.append(btnPlata2)

const btnOro2 = d.createElement ('input')
btnOro2.type = 'button'
btnOro2.id = 'oroxd'
contBtnRd.append(btnOro2)

const btnPlatino2 = d.createElement ('input')
btnPlatino2.type = 'button'
btnPlatino2.id = 'platinoxd'
contBtnRd.append(btnPlatino2)

const btnDiamante2 = d.createElement ('input')
btnDiamante2.type = 'button'
btnDiamante2.id = 'diamantexd'
contBtnRd.append(btnDiamante2)

const btnAscendente2 = d.createElement ('input')
btnAscendente2.type = 'button'
btnAscendente2.id = 'ascendentexd'
contBtnRd.append(btnAscendente2)

const btnInmortal2 = d.createElement ('input')
btnInmortal2.type = 'button'
btnInmortal2.id = 'inmortalxd'
contBtnRd.append(btnInmortal2)

const btnRadiante2 = d.createElement ('input')
btnRadiante2.type = 'button'
btnRadiante2.id = 'radiantexd'
contBtnRd.append(btnRadiante2)

// Estilo Botones RD //

btnHierro2.style.borderRadius = '15px'
btnHierro2.style.border = '#d20c0c'
btnHierro2.style.backgroundColor = 'rgb(15,15,15)'

btnBronce2.style.borderRadius = '15px'
btnBronce2.style.border = 'rgb(15,15,15)'
btnBronce2.style.backgroundColor = 'rgb(15,15,15)'

btnPlata2.style.borderRadius = '15px'
btnPlata2.style.border = 'rgb(15,15,15)'
btnPlata2.style.backgroundColor = 'rgb(15,15,15)'

btnOro2.style.borderRadius = '15px'
btnOro2.style.border = 'rgb(15,15,15)'
btnOro2.style.backgroundColor = 'rgb(15,15,15)'

btnPlatino2.style.borderRadius = '15px'
btnPlatino2.style.border = 'rgb(15,15,15)'
btnPlatino2.style.backgroundColor = 'rgb(15,15,15)'

btnDiamante2.style.borderRadius = '15px'
btnDiamante2.style.border = 'rgb(15,15,15)'
btnDiamante2.style.backgroundColor = 'rgb(15,15,15)'

btnAscendente2.style.borderRadius = '15px'
btnAscendente2.style.border = 'rgb(15,15,15)'
btnAscendente2.style.backgroundColor = 'rgb(15,15,15)'

btnInmortal2.style.borderRadius = '15px'
btnInmortal2.style.border = 'rgb(15,15,15)'
btnInmortal2.style.backgroundColor = 'rgb(15,15,15)'

btnRadiante2.style.borderRadius = '15px'
btnRadiante2.style.border = 'rgb(15,15,15)'
btnRadiante2.style.backgroundColor = 'rgb(15,15,15)'

// Variables total //
const br1 = d.createElement('br')
c.append(br1)
const conttoltal = d.createElement('div')
conttoltal.style.backgroundColor = 'red'
conttoltal.style.width = '50px'
conttoltal.style.height = '50px'
c.append(conttoltal)


