

// const x = 3
// // console.log(x.push('hi'))
// console.log(arr.push('3'))
// const y = arr.push('3')
// console.log(y)

// console.log(arr)


// // console.log('pop', arr.pop())
// // console.log('pop2', arr.pop())
// // console.log('pop3', arr.pop())
// // console.log('unshift', arr.unshift(29999))
// console.log('shift', arr.shift())

// console.log('arr', arr)

// i = i + 1
// i += 1
// i++........
// for loop

// const arr = [1,3,45,5,6,6,3,4,4]
// // const arr2 = [... arr, ... arr]
// // console.log(arr2)
// // console.log('arr.length', arr.length)
// // for (let i = 0; i < arr2.length; i++) {
// //  console.log(arr2[i])
// // }

// const newArr = []
// arr.forEach(function(item) {
//     newArr.push(item * 2)
// })

// console.log(newArr)

const cityData = [
{name: 'Seattle', state: 'WA', population: 652405, land_area: 83.9 },
{name: 'New York', state: 'NY', population: 8405837, land_area: 302.6 },
{name: 'Boston', state: 'MA', population: 645966, land_area: 48.3 },
{name: 'Kansas city', state: 'MO', population: 467007, land_area: 315 } 
]

// cityData.map(function(city) {
//     console.log(city)
// })

// const filtered = cityData.filter(city => city.name === 'Seattle')
// console.log(filtered)


const nums = [3, 4, 4, 32, 342, 23, 3, 2, 234]

const numzz = nums.reduce((left, right) => left + right)
console.log(numzz)
// const numsFiltered = nums.filter(num => num === 0)

const sum = cityData.map(city => city.land_area).reduce((l,r) => l + r)

console.log (sum / cityData.length)


























