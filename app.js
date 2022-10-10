
console.log("Hello World")

const sum = (a,b) => {
    return a+b
}

console.log(sum(7,3))



// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euros) => {
    return (euros* oneEuroIs.USD)
 
}

const fromDollarToYen = (dollar) => {
    return (dollar/oneEuroIs.USD)*oneEuroIs.JPY
}


const fromYanToPound = (yen) => {
   return (yen/oneEuroIs.JPY)*oneEuroIs.GBP
}

console.log(fromDollarToYen(1))
module.exports =  {sum, fromEuroToDollar, fromDollarToYen, fromYanToPound} ;

console.log(fromDollarToYen(1))