/*
You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:
drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
]

The output of the sorted drinks object will be:
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
*/

function sortDrinkByPrice(drinks) {
	return drinks.sort((a, b) => (a.price > b.price) ? 1: -1)
}

const drinks1 = [
	{name: 'lemonade', price: 90}, 
	{name: 'lime', price: 432}, 
	{name: 'peach', price: 23}
];

const drinks2 = [
	{name: 'water', price: 120}, 
	{name: 'lime', price: 80}, 
	{name: 'peach', price: 90}
];

console.log(sortDrinkByPrice(drinks1)) 
/*
[
    { name: 'peach', price: 23 },
    { name: 'lemonade', price: 90 },
    { name: 'lime', price: 432 }
]
*/
console.log(sortDrinkByPrice(drinks2))
/*
[
    { name: 'peach', price: 23 },
    { name: 'lemonade', price: 90 },
    { name: 'lime', price: 432 }
]
*/
