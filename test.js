// import the function sum from the app.js file
const { sum } = require('./app.js');


test('adds 2 + 2 to equal 4', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(2, 2);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(4);
});


test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.2; 
    
     expect(dollars).toBe(expected); 

});

//fromDollarToYen,

test("12 dollar should be 1279 jpy", function(){
   
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(12);
    const expected = (12/1.2)*127.9 ;  
    
    expect(dollars).toBe(expected); 
});
 
// fromYenToPound
test("yen to pound ", function(){
    
    const { fromYenToPound } = require('./app.js');
    const dollars = fromYenToPound(1);
    const expected = (1/127.9)*0.8; 

    expect(dollars).toBe(expected); 
})