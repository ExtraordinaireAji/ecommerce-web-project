// Anything declared outside the curly braces has global scope
// Anything declared inside the curly braces has a block scope
const firstName = 'victor'
//  firstName = 'tetteh'

// function greeting(){
//     let lastname = 'tetteh'
//     return('hello frist name'+ firstName)
// }
console.log(firstName)


const course = 'fullstack web dev'
const school = 'Gomy code'
const sentence= 'My name is ' + firstName + 'iam studing '+ course + school
console.log(sentence)

const sentence2 = `my name is ${firstName}, i am currently studying ${course}, at ${school}`
console.log(sentence2) 

console.log(`this i
a multi line
string`)

const intialBalance = 10000
const currentBal = 20000
const totalBal = `${intialBalance+currentBal}`
console.log(totalBal)

const nickName = 'vic'
const passion = 'sleeping'
const sentence3 = `my name is ${nickName}, and i have passion for ${passion}`
console.log(sentence3)


const age= 34
age <= 17 ? console.log('cant vote') :console.log('can vote')

const job= undefined
job == 'developer' ? console.log('salary is 500k') : console.log('minimum wage')

const childAge = 50
childAge <= 10 ? console.log('free food for you') : 
childAge >=11 && 
childAge<= 17 ? console.log('bill is 1k'):
childAge >=18 && childAge<=30 ? console.log('pay 2k'):
console.log('5k')

const profit = (sp,cp) => {
    return(sp - cp)
}

const perProfit = (cp,sp) => {
    let profit = sp-cp
    let percentProfit= (profit/cp)*100
    return (percentProfit)
}
console.log(perProfit(5000, 12000))



const favouriteFood = ['Afang', 'rice', 'eba', 'Tacos', 'goatmeat', 'pasta']
// const david = favouriteFood[0]
// console.log(david)
// const omoh = favouriteFood[5]
// console.log(omoh)

// const [david, christiana, nike, teeboy, idris, omoh]= favouriteFood
// console.log(david)
// console.log(christiana)
// console.log(teeboy)
// console.log(idris)
// console.log(nike)
// console.log(omoh)

const grades = ['A1', 'B2', 'B3', 'C4', 'C5', 'C6', 'D7', 'E8', 'F9']
const david = grades[7]
const teeboy = grades[4]
const idris = grades[2]
const victor = grades[0]
const toheeb = grades[8]
const nike = grades[5]
const omoh = grades[6]
const christiana = grades[3]
const femi = grades[1]
console.log(david)



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [frist, second, third, ...rest] = numbers
console.log(rest)
console.log(rest[2])

const person = {
    fullName : 'Tetteh victor kweku',
    email : 'victortetteh520@gmail.com',
    gender: 'male'
}
const {  fullName, email, gender} =person
console.log(fullName)
console.log(email)
console.log(gender)

const person2={
    hairColor: 'brown',
    hobbies: ['sleeping', 'eating', 'watching movies'],
    height: 5.6,
}
const person3 = {
    ...person, ...person2
}
console.log(person3)