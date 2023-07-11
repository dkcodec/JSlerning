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


const fnWithError = () => {
    throw new Error('Some error')
}


try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.massage)
}
fnWithError()

console.log('continue...')