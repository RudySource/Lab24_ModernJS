console.log('\n==Деструктуризация массивов==')
const colors = ['red', 'green', 'blue']
const [first, second, third] = colors
console.log(first, second, third)
const [c1, c2, c3, c4 = 'yellow'] = colors
console.log(c1, c2, c3, c4)
console.log('\n==Деструктуризация объектов==')
const user = {
	name: 'Алиса',
	age: 30,
	city: 'Москва',
}

const { name, age, city } = user
console.log(name, age, city)

const { name: userName, age: userAge, country = 'Россия' } = user
console.log(userName, country)

console.log('\n==Деструктуризация в параметрах==')

function printUser({ name, age, city }) {
	console.log(`Имя: ${name}, Возраст: ${age}, Город: ${city}`)
}

console.log()
printUser(user)

const product = {
	name: 'Телефон',
	price: 500,
	category: 'Электроника',
	inStock: true,
}
const { name: productName, price, category, inStock } = product
console.log(
	`Название: ${productName}, Цена: ${price}, Категория: ${category}, В наличии: ${inStock}`,
)

function printProduct({ name, price, category, inStock }) {
	console.log(
		`Название: ${name}, Цена: ${price}, Категория: ${category}, В наличии: ${inStock}`,
	)
}

printProduct(product)
