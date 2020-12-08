// ************************************* filter() ***************************************
console.log("**************** filter() *****************");
function myFilter(arr, callback){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 7){
          callback(arr[i]);
        }
    }
}   
myFilter([5, 7, 8, 9], function (res) {
console.log("Result of callback function myFilter is: " + res);
});


// ************************************* reduce() ***************************************
console.log("**************** reduce() *****************");
 function myReduce(arr1, callback){
    let sum = 0;
    for(let i = 0 ; i < arr1.length; i++){
        sum += arr1[i];
    }
    callback(sum);
}
myReduce([10, 20, 30, 40], function(summ) {
    console.log("Result of callback function myReduce is: " + summ);
});


// ************************************* map() ***************************************
console.log("***************** map() ******************");
function myMap(arr2, callback){
    let res = 1;
    for(let i = 0; i < arr2.length; i++){
        arr2[i] *= 5;
    }
    callback(arr2);
}
myMap([1, 3, 7, 9], function(result){
    console.log("Result of callback function myMap is: " + result);
});


// ************************************* forEach() ***************************************
console.log("*************** forEach() ****************");
function myForEach(arr3, callback){
    let txt= '';
    for(let i = 0; i < arr3.length; i++){
        txt += arr3[i] + '*';
    }
    callback(txt);
}
myForEach([5, 7, 8, 9], function(text) {
    console.log("Result of callback function myForEach is: " + text);
});


// ************************************* every() ***************************************
console.log("**************** every() *****************");
function myEvery(arr4, callback){
    let res;
    for(let i = 0; i< arr4.length; i++){
        if(arr4[i] < 10){
            res = true;
        }else{
            res = false;
            break;
        }
    }
    return callback(res);
}
myEvery([5, 7, 8, 11], function(res){
    console.log("Result of callback function myEvery is: " + res);
});


// ************************************* some() ***************************************
console.log("***************** some() ******************");
function mySome(arr5, callback){
    let res;
    for(let i = 0; i< arr5.length; i++){
        if(arr5[i] < 10){
            res = true;
            break;
        }else{
            res = false;
        }
    }
    return callback(res);
}
mySome([5, 7, 8, 9], function(res){
    console.log("Result of callback function mySome is: " + res);
});
 
