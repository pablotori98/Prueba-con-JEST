const {sum, fromEuroToDollar, fromDollarToYen, fromYanToPound} = require('./app.js');

test ('adds 14 + 9 to equal 23', () =>{
    let total = sum(14,9);
    expect(total).toBe(23);
});


test('One euro should be 1.206 dollars', function(){

    expect(fromEuroToDollar(1)).toBe(1.2);
})

test('One dollar should be 106.58 yen', function(){

    expect(fromDollarToYen(1)).toBe(106.58333333333334);
})

test('One yen should be 0.006 pounds', function(){

    expect(fromYanToPound(1)).toBe(0.006254886630179828);
})