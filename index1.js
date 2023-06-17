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


objectWithFunction.helloHello()
