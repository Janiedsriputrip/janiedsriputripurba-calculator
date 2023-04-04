const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    console.log(event.target.value); 
  })
})  

const screen = document.querySelector('.screen')
  const updateScreen = (number) => {
    screen.value = number;
  }

const number = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    updateScreen(event.target.value) ;
  })
})

let prevNumber = '';
let calculationOperator = '';
let currentNumber= '0';

const inputNumber= (number) => {
  if (currentNumber === '0') {
          currentNumber = number
     }else{
          currentNumber += number
     }
}

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber) 
  })
})

const operators = document.querySelectorAll(".operator")
     operators.forEach((operator) =>{
          operator.addEventListener("click", (event) =>{
               inputOperator(event.target.value)
          })
     })

const inputOperator = (operator) => {
  if (calculationOperator === '') {
       prevNumber = currentNumber
  }
       calculationOperator = operator
       currentNumber = '0'    
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
     calculate()
     updateScreen(currentNumber)
})

const calculate = () => {
     let result = '' 
     switch (calculationOperator){
        case "+":
          result = parseFloat(prevNumber) + parseFloat(currentNumber)
          break
        case "-":
          result = prevNumber - currentNumber
          break
        case "*":
          result = prevNumber * currentNumber
          break  
       case "/":
          result = prevNumber / currentNumber
          break
          default:
          break
     }
    currentNumber = result
    calculationOperator = ''
}

const hapus = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
const clearBtn = document.querySelector('.hapus')
     clearBtn.addEventListener('click', () => {
        hapus()
        updateScreen(currentNumber)
          
     })

inputDecimal = (dot) => {
   if(currentNumber.includes('.')){
      return
   }
   currentNumber += dot
}
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)   
  updateScreen(currentNumber)
})

const del = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
const clearDel = document.querySelector('.del')
     
     clearDel.addEventListener('click',() => {
      del()
      updateScreen(currentNumber)
})

