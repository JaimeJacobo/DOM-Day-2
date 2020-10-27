
//Localiza un elemento por su ID
const catDiv = document.getElementById('cat')

// console.log(catDiv)


//.innerHTML  -> Cambiar el HTML interno del elemento que le indiques
catDiv.innerHTML = '<h2>Soy un gato</h2>'

//.innerText -> Cambiar el texto de el elemento que indiques
catDiv.innerText = 'Soy un gato 2'

const textOfDogDiv = document.getElementById('dog').innerHTML
catDiv.innerText = textOfDogDiv

//.style.<nombreDeLaPropiedad>

const dogDiv = document.getElementById('dog')
dogDiv.style.fontSize = '12px'

//getElementsByClassName(<nombre de la clase>)
const mouseDivsCollection = document.getElementsByClassName('mouse')
const mouseDivArray = [...mouseDivsCollection]

//Modificar todos los divs con la classe mouse
mouseDivArray.forEach((div) => div.innerHTML = 'Mouse div')

//Modificar el segundo div con la clase mouse que aparece en mi página 
mouseDivArray[1].innerHTML = 'Soy el segundo div'


//.getElementsByTagName()
const h1DivCollection = document.getElementsByTagName('h1')
const h1DivArray = [...h1DivCollection]
h1DivArray[0].style.fontWeight = 'normal'

//.querySelector(<query>)
const firstMouseClass = document.querySelector('.mouse')
// console.log(firstMouseClass)

//.querySelectorAll()
const mouseClassCollection = document.querySelectorAll('.mouse')
const mouseClassArray = [...mouseClassCollection]
// console.log(mouseClassArray)

mouseClassArray.forEach((selector)=>{
  selector.style.textDecoration = 'underline'
})

// .className
dogDiv.className = 'animal'

const newCatDiv = document.getElementById('cat')
// console.log(newCatDiv.className)


//.id
console.log(h1DivArray[0].id)


//setAttribute(<nombre del atibuto>)

h1DivArray[0].setAttribute('style', 'color: coral; font-weight: normal;')

//removeAttribute(<nombre del atibuto>)

h1DivArray[0].removeAttribute('id')

const myString = 'Soy de prueba'

// document.getElementById('prueba-div').innerHTML = `<p>${myString}</p>`


//.onclick(callback)
document.getElementById('print-name-button').onclick = ()=>{
  console.log(myInput.value)
}

//input.value
const myInput = document.getElementById('name')
console.log(myInput.value)


//Funcionalidad para cambiar el título de color

const colors = ['red', 'green', 'coral', 'black', 'aqua', 'yellow']
let actualColor = 'coral'

const getRandomColor = ()=>{

  const randomIndex = Math.floor(Math.random() * colors.length )

  console.log('actualColor1', actualColor)
  console.log('randomColor first', colors[randomIndex])

  if(colors[randomIndex] === actualColor){
    actualColor = getRandomColor();
  }

  actualColor = colors[randomIndex]
  console.log('actualColor2', actualColor)

  return actualColor
}

document.getElementById('change-title-color-button').onclick = ()=>{
  const randomColor = getRandomColor()
  // console.log('RANDOM-COLOR', randomColor)
  h1DivArray[0].style.color = randomColor
}


// document.getElementById('change-title-color-button').onclick = ()=>{
//   if(h1DivArray[0].style.color === 'blue'){
//     h1DivArray[0].style.color = 'coral'
//   } else if(h1DivArray[0].style.color === 'coral')
//   h1DivArray[0].style.color = 'blue'
// }