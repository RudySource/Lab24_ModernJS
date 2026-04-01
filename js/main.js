// // // // console.log('\n==Деструктуризация массивов==')
// // // // const colors = ['red', 'green', 'blue']
// // // // const [first, second, third] = colors
// // // // console.log(first, second, third)
// // // // const [c1, c2, c3, c4 = 'yellow'] = colors
// // // // console.log(c1, c2, c3, c4)
// // // // console.log('\n==Деструктуризация объектов==')
// // // // const user = {
// // // // 	name: 'Алиса',
// // // // 	age: 30,
// // // // 	city: 'Москва',
// // // // }

// // // // const { name, age, city } = user
// // // // console.log(name, age, city)

// // // // const { name: userName, age: userAge, country = 'Россия' } = user
// // // // console.log(userName, country)

// // // // console.log('\n==Деструктуризация в параметрах==')

// // // // function printUser({ name, age, city }) {
// // // // 	console.log(`Имя: ${name}, Возраст: ${age}, Город: ${city}`)
// // // // }

// // // // console.log()
// // // // printUser(user)

// // // // const product = {
// // // // 	name: 'Телефон',
// // // // 	price: 500,
// // // // 	category: 'Электроника',
// // // // 	inStock: true,
// // // // }
// // // // const { name: productName, price, category, inStock } = product
// // // // console.log(
// // // // 	`Название: ${productName}, Цена: ${price}, Категория: ${category}, В наличии: ${inStock}`,
// // // // )

// // // // function printProduct({ name, price, category, inStock }) {
// // // // 	console.log(
// // // // 		`Название: ${name}, Цена: ${price}, Категория: ${category}, В наличии: ${inStock}`,
// // // // 	)
// // // // }

// // // // printProduct(product)

// // // // console.log('\nSpread для массивов')
// // // // const arr1 = [1, 2, 3]
// // // // const arr2 = [4, 5, 6]
// // // // const combined = [...arr1, ...arr2]
// // // // console.log(`Combined: ${combined}`)
// // // // const copy = [...arr1]
// // // // console.log(`Copy: ${copy}`)
// // // // const extended = [0, ...arr1, 7, 8]
// // // // console.log(`Extended: ${extended}`)

// // // // console.log('\nSpread для объектов')

// // // // const person = {
// // // // 	name: 'Иван',
// // // // 	age: 25,
// // // // }
// // // // const adress = {
// // // // 	city: 'Санкт-Петербург',
// // // // 	street: 'Невский проспект',
// // // // }
// // // // const fullinfo = { ...person, ...adress }
// // // // console.log(`Full Info:`, fullinfo)
// // // // const personCopy = { ...person }
// // // // console.log('Person Copy:', personCopy)
// // // // const updatedPerson = { ...person, age: 26, ocupation: 'Разработчик' }
// // // // console.log('Updated Person:', updatedPerson)

// // // console.log('Rest оператор для массивов')
// // // function sum(...numbers) {
// // // 	return numbers.reduce((total, num) => total + num, 0)
// // // }
// // // console.log(`Sum 1,2,3,4: ${sum(1, 2, 3, 4)}`)
// // // console.log(`Sum 5,10,15: ${sum(5, 10, 15)}`)

// // // const numbers = [1, 2, 3, 4]
// // // const [first, second, ...rest] = numbers
// // // console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`)

// // arr1 = [1, 2, 3]
// // arr2 = [4, 5, 6]
// // const combined = [...arr1, ...arr2]
// // console.log(`Combined: ${combined}`)

// // function findmax(...numbers) {
// // 	return Math.max(...numbers)
// // }
// // console.log(`Max of 1,2,3,4: ${findmax(1, 2, 3, 4)}`)
// // console.log(`Max of 5,10,15: ${findmax(5, 20, 15)}`)

// // const person = {
// // 	name: 'Иван',
// // 	age: 25,
// // }
// // const adress = {
// // 	city: 'Санкт-Петербург',
// // 	street: 'Невский проспект',
// // }
// // const fullinfo = { ...person, ...adress }
// // console.log(`Full Info:`, fullinfo)
// import { greet, add, PI } from './utils.js'

// console.log(greet('Мир'))
// console.log(`Сумма 5 и 10: ${add(5, 10)}`)
// console.log(`Значение PI: ${PI}`)

// import { multiply as умножить } from './utils.js'
// console.log(`Произведение 5 и 10: ${умножить(5, 10)}`)

// import * as Utils from './utils.js'
// console.log(Utils.greet('Мир'))
// console.log('Умножение 5 и 10:', Utils.multiply(5, 10))

import * as math from './math.js'
console.log(`Квадрат 3: ${math.square(3)}`)
console.log(`Куб 2: ${math.cube(2)}`)
console.log(`Значение E: ${math.E}`)
