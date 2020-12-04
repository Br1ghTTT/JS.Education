// ************************************* filter() ***************************************

let arr = [5, 7, 8, 9];
let newArr = arr.filter(myFilter = (value) => {return value > 7});
alert(newArr);


// ************************************* reduce() ***************************************

let newSecondArr = arr.reduce(myReduce = (value, total) => {return value + total});
alert(newSecondArr);

// ************************************* map() ***************************************

let newThirdArr = arr.map(myMap = (value) => {return value * 5});
alert(newThirdArr);

// ************************************* forEach() ***************************************
let txt = '';
arr.forEach(myForEach => {console.log(myForEach + '*')});

// ************************************* every() ***************************************
let newFourhArr = arr.every(myEvery = (value) => {return value > 10});
alert(newFourhArr);

// ************************************* some() ***************************************

let newFiveArr = arr.some(mySome = (value) => {return value > 5});
alert(newFiveArr);