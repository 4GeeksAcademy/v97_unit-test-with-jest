// this is my function that sums two numbers
const sum = (a,b) => {
  return a * b
}

console.log(sum(7,3))




// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
   
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}


//from Dollar to Yen
const fromDollarToYen = function(valueInDollar){
    
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9;
  
    return valueInYen;
}

//from Yen to Pound
const fromYenToPound = function(valueInYen){

   
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = valueInEuro * 0.8;

    
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };