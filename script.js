'use strict'

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Juan Sánchez',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: 'María Portazgo',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: 'Estefanía Pueyo',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: 'Javier Rodríguez',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}

const accounts = [account1, account2, account3, account4]

// Elements
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')

// init data

const createUsernames = () => {
  accounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('')
  })
}

createUsernames()

btnLogin.addEventListener('click', (e) => {
  // Prevent form from submitting
  e.preventDefault()
  const username = inputLoginUsername.value
  const pin = Number(inputLoginPin.value)
  console.log(`Intento login con el usuario ${username} y el pin ${pin}`)

  // recorrer todos los accounts y buscar el que coincida con el username
  // y luego comparar el pin
  const currentAccount = accounts.find(
    (account) => account.username === username
  )
  // puede ser null si el usuario no existe!!!

  console.log('Current account:', currentAccount)

  // currentAccount && currentAccount.pin === currentAccount?.pin

  if (currentAccount?.pin === pin) {
    console.log('Login correcto')
    // cargamos los datos y visualizamos
    labelWelcome.textContent = `Bienvenido ${
      currentAccount.owner.split(' ')[0]
    }`
    containerApp.style.opacity = 100
  }
})
