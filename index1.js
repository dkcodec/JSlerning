const MyCity = {
    city: 'New York',
    popular: true,
    info : {
        isPopular: true,
        isCountry: 'America'
    }
}
MyCity.city = 'San-Francisco'

const countryPropertyName = 'country'

MyCity[countryPropertyName] = 'USA'

MyCity['land'] = true

delete MyCity.popular

delete MyCity.info.isPopular

console.log(MyCity.info)

const nameD = 'Dima'
const postQty = 17 

const info = {
    nameD,
    postQty,
    sex: 'Male'
}

console.log(info)


const objectWithFunction = {
    city: 'New York',
    helloHello() {
        console.log('Hello')
    }
}

//const objectWithFunction2 = Object.assign({}, objectWithFunction)
//const objectWithFunction2 = { ...objectWithFunction }
const objectWithFunction2 = JSON.parse(JSON.stringify(objectWithFunction))

objectWithFunction2.city = 'LA'

console.log(objectWithFunction2.city)

objectWithFunction.helloHello()

const personOne = {
    age: 20,
    namee: 'Grisha'
}

function increasePersonAge(person){
    person.age +=1
    return person
}

increasePersonAge(personOne)
console.log(personOne)

const personTwo = {
    age: 30,
    name: 'Mitchel'
}

function increasePersonAge1(person) {
    const updatedPerson = {...person}
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonTwo = increasePersonAge1(personTwo)
console.log(personTwo.age)
console.log(updatedPersonTwo.age)


function myName() {
    console.log('Dima')
}

setTimeout(myName, 10000)



const a = 5

function myFn() {
        function innerFn() {
            console.log(a)
        }
        innerFn()
}

let undef

console.log(typeof undef === 'undefined')

myFn()

console.log(!!'asda')


const colorButton = {
    color: 'red'
}

const button ={ 
    ...colorButton,
    width: 100,
    lenght: 20
}

const obj1 = { a: 1 }
const obj2 = { a: 1 }
const a1 = 1;
const a2 = 1

console.log(button)
console.log(a1 == a2)


const namee = 'Dima'
const age = 17

const massage = `My name is ${namee}. I am ${age} years old.`
console.log(massage)

const abc = (a,b) => {
    let c
    c = a + b
    return c
}

console.log(abc(5,6))

const newPost = (post, addetAt = Date()) => ({
    ...post,
    addetAt,
})

const firstPost = {
    id: 1,
    author: 'Dima'
}

console.log(newPost(firstPost))


//ARRAYS
const myArray = [1,2,3]
console.log(myArray) 

const myArray2 = [1, 2, 3]
console.log(myArray2)

console.log(myArray === myArray2)
console.log(myArray[1])
console.log(myArray.length)
myArray.push(5)
console.log(myArray, myArray.length)

const removedElement = myArray.pop()
console.log(removedElement)

console.log(myArray)

//UNSHIFT
myArray.unshift('asd')
console.log(myArray)

//SHIFT
myArray.shift()
console.log(myArray)

//FOREACH
myArray.forEach(el => console.log(el*2))
console.log(myArray)

//MAP

const myArrayy = [1, 2, 3, 10]
console.log(myArrayy)

const mapArray = myArrayy.map(el => el*3)
console.log(mapArray)
console.log(myArrayy) // array isnt changed 

//DESTRUAL ASSIGMENT

const userProfile = { 
    name: 'Dima',
    commetsQty: 17, 
    hasSignedAgreement: false
}

const {name, commetsQty} = userProfile
console.log(name, commetsQty)

//DESTRUAL ARRAY

const defaultArray = ['apple', 'samsung']

const [compOne, compTwo] = defaultArray
console.log(compTwo)


//DESTRUAL IN FUNCTION

const userInfo = ({name, commetsQty}) => {
    if (!commetsQty){
        return `User ${name} has no comments`
    }
    else{
        return `User ${name} has ${commetsQty} comments`
    }
}

const ans = userInfo(userProfile)
console.log(ans)

//SWITCH

const month = 2

switch (month) {
    case 12:
        console.log('December')
        break
    case 1:
        console.log('January')
        break
    case 2:
        console.log('February')
        break
    default: 
        console.log('Isnt winter month')
}

//TERNARY OPERATOR

const value = 11
value
    ? console.log('elleven')
    : console.log('isnt elleven')


const value1 = 11
const value2 = 25
value1 && value2
    ?console.log('True')
    :console.log('False')


let value3 = -5
console.log(value3 >= 0 ?value :value3-3)

const res = value3 >= 0 ?value3 :value3-3
console.log(res)

/*Cycles
for
*/
for (let i = 0; i < 3; i++){
    console.log(`${i} element`)
}

/*while 
while (condition){
    stuff
}

//Do while
do {
    stuff
} while (condition)

//For in for objects
for (key in object){
    stuff
}
*/
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject){
    console.log(key, myObject[key])
}

//FOREACH for objects
Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})

//OBJECTS TO ARRAY
//Object.values(create array and save values of variable)
//Object.keys(crate array and save name of variable (and values of variable))

//FOR OF not for a objects
const myString = 'Hey'
for(const letter of myString){
    console.log(letter)
}


//EXPORT IMPORT
/*
//First file
const myNameFn = () => {
    console.log('Dima')
}
export default myNameFn

//Second file
import printMyName from 'adres'
printMyName()
*/

//CLASS

// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }

//     upvote() {
//         this.votesQty += 1
//     }
// }

// //Create new instans

// const firstComment = new Comment ('first comment')

// console.log(firstComment)

// console.log(firstComment instanceof Comment)

// firstComment.upvote()
// console.log(firstComment)

// console.log(firstComment.hasOwnProperty('text'))

//STATIC METHOD

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments (first, second) {
        return `${first} ${second}`
    }
}

const myComment = new Comment ('Awesome comment')
const mySecondComment = new Comment('the same comment')

console.log(Comment.mergeComments( 'First comment', 'Second comment'))

//EXTEND CLASS

class NumbersArray extends Array {
    sum () {
        return this.reduce((el, acc) => acc += el, 0) 
    }
}

const methodArray = new NumbersArray (2, 5 ,8)

console.log(methodArray.sum())

//Promises


// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response  => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.error(error.message))


const getDate = url => 
    new Promise((resolve, reject) => 
    fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error))
    )
// getDate('https://jsonplaceholder.typicode.com/todos')
//     .then(date => console.log(date))
//     .catch(error => console.log(error.message))

//Async / Awiat

const asyncFn = async () => {
    throw new Error ('There was an error!')
}
asyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))

const timerPromise = () => {
    new Promise ((resolve, reject) => 
    setTimeout(() => resolve, 2000))
}

const asyncFunction = async () => {
    console.log('Timer start!')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended!', endTime - startTime)
}

asyncFunction()


const getDate1 = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'

try{
    const date = await getDate1(url)
    console.log(date)
}
catch (error) {
    console.log(error.message)
}