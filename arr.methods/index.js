// ************************************* filter() ***************************************
function myFilter(){
    let arr = [5, 7, 8, 9];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 7){
            console.log(arr[i]);
        }
    }
}
myFilter();


// ************************************* reduce() ***************************************
function myReduce(){
    let arr = [5, 7, 8, 9];
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}
myReduce()

// ************************************* map() ***************************************
function myMap(){
    let arr = [5, 7, 8, 9];
    for(let i = 0; i < arr.length; i++){
        arr[i] *= 5;
    }
    console.log(arr);
}
myMap();

// ************************************* forEach() ***************************************
function myForEach(){
    let arr = [5, 7, 8, 9];
    let txt= '';
    for(let i = 0; i < arr.length; i++){
        txt += arr[i] + '*';
    }
    console.log(txt);
}
myForEach();

// ************************************* every() ***************************************
function myEvery(){
    let res;
    let arr = [5, 7, 18, 9];
    for(let i = 0; i< arr.length; i++){
        if(arr[i] < 10){
            res = true;
        }else{
            res = false;
            break;
        }
    }
    return res;
}
console.log(myEvery());

// ************************************* some() ***************************************
function mySome(){
    let res;
    let arr = [5, 7, 8, 9];
    for(let i = 0; i< arr.length; i++){
        if(arr[i] < 10){
            res = true;
            break;
        }else{
            res = false;
        }
    }
    return res;
}
console.log(mySome());
