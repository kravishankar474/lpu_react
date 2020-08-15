//tim berner lee introduces javascript
//sum microsystems -- mozilaa parents company
//interpreter -- line by line
//ECMA standardisation for js
//ES6 2015
//DATATYPES-- number, string, null, undefined, boolean, objects, symbol(es6)

// var age  = 10;
// var name = 'Ravi'
// console.log(age)
// console.log(name)
// //            0123456789 
// var phrase = 'good afternoon what\'s going on'
// console.log(phrase[10])

// //string methods
    // console.log(age.length)
    // console.log(phrase.length)//property
    // console.log(phrase.toUpperCase())//methods
    // console.log(phrase.toLowerCase())//methods
// //all the above methos is not changing the original string

    // console.log(phrase.substr(2, 8))
    // console.log(phrase.substring(2, 5))
    // var str = phrase.substr(2,8).length
    // console.log(str)

    // console.log(phrase.indexOf('after'))
//Number - arithmetic operation
//BEDMAS rule
    // var expression = 2*(5**2/5)+2/2;
    // console.log(expression)


    // var age = 10;
    // var sum = 10 - '10'
    // console.log(sum)
    // console.log('name'+'please')

//Boolean Null undefined

    // var isLogin = false;
    // var customer;
    // var accountBalance = null;
    // console.log(isLogin,customer, accountBalance)

    // var you = 100/0;

    // if(you)
    // {
    //     console.log('it is true')
    // }
    // else{
    //     console.log("it is false")
    // }


//truthy and falsy
//truthy - value, number, string, 1, true, ' ', infinity
//falsy - undefined, null, false, 0,'', NaN

// var val = 10 - 'alphabet'

// console.log(typeof val);
// console.log(typeof true)


//Explicit conversion

var val = '300'

console.log(typeof val)
console.log(Boolean(val));

    