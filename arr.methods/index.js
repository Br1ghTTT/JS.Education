// ************************************* filter() ***************************************
console.log("**************** filter() *****************");
function myFilter(arr, callback){
    for(let i = 0; i < arr.length; i++){
          callback(arr[i]);
    }
}   
myFilter([5, 7, 8, 9], function (res) {
    if(res > 7){
        console.log("Result of callback function myFilter is: " + res);
    }
});


// ************************************* reduce() ***************************************
console.log("**************** reduce() *****************");
 function myReduce(arr1, callback){
        callback(arr1);
}
myReduce([10, 20, 30, 40], function(res) {
    let sum = 0;
    for(let i = 0; i < res.length; i++){
        sum += res[i];
    }
    console.log("Result of callback function myReduce is: " + sum);
});


// ************************************* map() ***************************************
console.log("***************** map() ******************");
function myMap(arr2, callback){
    callback(arr2);
}
myMap([1, 3, 7, 9], function(result){
    let res = [];
    for(let i = 0; i < result.length; i++){
        result[i] *= 5;
    }
    res.push(result);
    console.log("Result of callback function myMap is: " + res);

});


// ************************************* forEach() ***************************************
console.log("*************** forEach() ****************");
function myForEach(arr3, callback){
    callback(arr3);
}
myForEach([5, 7, 8, 9], function(res) {
    let txt= '';
    for(let i = 0; i < res.length; i++){
        txt += res[i] + '*';
    }
    console.log("Result of callback function myForEach is: " + txt);
});


// ************************************* every() ***************************************
console.log("**************** every() *****************");
function myEvery(arr4, callback){
    callback(arr4)
}
myEvery([5, 7, 8, 11], function(res){
    let result;
    for(let i = 0; i < res.length; i++){
        if(res[i] < 10){
            result = true;
        }else{
            result = false;
            break;
        }
    }
  
    console.log("Result of callback function myEvery is: " + result);
});


// ************************************* some() ***************************************
console.log("***************** some() ******************");
function mySome(arr5, callback){
    callback(arr5);
}
mySome([5, 7, 8, 9], function(res){
    let result;
    for(let i = 0; i< res.length; i++){
        if(res[i] < 7){
            result = true;
            break;
        }else{
            result = false;
        }
    }
    console.log("Result of callback function mySome is: " + result);
});
 
