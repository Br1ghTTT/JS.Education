// ************************************* filter() ***************************************
console.log("**************** filter() *****************");
arr = [5, 7, 8, 9];
const callback = (value) => value > 7;

const result = myFilter(arr, callback);
function myFilter(arr, myCallBack){
    const newArr = [];
    for(let i = 0; i < arr.length; i++){  
        if(myCallBack(arr[i])){ 
           newArr.push(arr[i]);
        }
    } 
    console.log("Result of callback function myFilter is: " + newArr);
    return newArr;
}


// ************************************* reduce() ***************************************
console.log("**************** reduce() *****************");
arr1 = [1, 2, 3, 4];
const sumReducer = (acc, next) => { return acc + next;}
function myReduce(arr1, reducer, initialValue){
    let i;
    if(initialValue){
        i = 0;
    }else{
        i = 1;
        initialValue = arr1[0];
    }
    let acc = initialValue;

    for(; i < arr1.length; i++){
        acc = reducer(acc, arr1[i]);
    }
    return acc;
}
const resReduce = myReduce(arr1, sumReducer, 5);
console.log("Result of callback function myReduce is: " + resReduce);
 

// ************************************* map() ***************************************
console.log("***************** map() ******************");
arr2 = [5, 7, 8, 9];
callback2 = (arr2) => {return arr2 * 2; }
const result2 = myMap(arr2, callback2);
function myMap(arr2, myCallBack2){
    const resArray = [];
    for(let i = 0; i < arr2.length; i++){
        resArray.push(myCallBack2(arr2[i]));
    }
    console.log("Result of parental array is: " + arr2);
    console.log("Result of callback function myMap is: " + resArray);
    return resArray;
}

// ************************************* forEach() ***************************************
 console.log("*************** forEach() ****************");
const arr3 = [5, 7, 8, 9];
const callForEach = (arr3) => {console.log( '_' + arr3 + '_' )};
function myForEach(arr3, callback){
    for(let i = 0; i < arr3.length; i++){
    callback(arr3[i]);
    }
}
myForEach(arr3, callForEach);



// ************************************* every() ***************************************
console.log("**************** every() *****************");
const arr4 = [5, 7, 8, 11];
const callEvery = (element) =>  element > 10;
function myEvery(arr4, callback){
    let res;
    for(let i = 0; i < arr4.length; i++){
        if(callback(arr4[i])){
            res =  callback(arr4[i]);
        }else{
            res =  callback(arr4[i]);
            break;
        }
    }
    return res;
}
const resOfMyEvery = myEvery(arr4,callEvery);
console.log("Result of callback function myEvery is: " + resOfMyEvery);


// ************************************* some() ***************************************
console.log("**************** some() *****************");
const arr5 = [5, 7, 8, 11];
const callSome = (element) =>  element > 10;
function mySome(arr5, callback){
    let res;
    for(let i = 0; i < arr5.length; i++){
        if(callback(arr5[i])){
            res =  callback(arr5[i]);
            break;
        }else{
            res =  callback(arr5[i]);
        }
    }
    return res;
}
const resOfMySome = mySome(arr5,callSome);
console.log("Result of callback function mySome is: " + resOfMySome);
   
