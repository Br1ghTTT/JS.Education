function checkFirstInput(){
let input1 = document.getElementsByClassName("first-input")[0];
let hoursArr = [];
let valOfFirsInput = input1.value;
let mainRegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
let regExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3])$/;
let secRegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5]$/;
let thirdRegExp = /^[0-9]:[0-5]$/;
let fourthRegExp = /^[0-9]:[0-9][0-5]$/;

    if(mainRegExp.test(input1.value)){
        if(fourthRegExp.test(input1.value)){
            valOfFirsInput = '0' + valOfFirsInput;
            input1.value = valOfFirsInput;
            return input1.value;
        }
        return input1.value;
    }else if(regExp.test(input1.value)){
        for(let i = 0; i < 24; i++){
            hoursArr.push(i);
            if(valOfFirsInput >= 10 && valOfFirsInput == hoursArr[i]){
                valOfFirsInput += ':00';
            }else if(valOfFirsInput < 10 && valOfFirsInput == hoursArr[i]){
                valOfFirsInput = '0' + valOfFirsInput + ':00';
            }
        }
        input1.value = valOfFirsInput;
        return input1.value; 
    }else if(secRegExp.test(input1.value)){
        if(thirdRegExp.test(input1.value)){
            valOfFirsInput = '0' + valOfFirsInput +'0';
            input1.value = valOfFirsInput;
            return input1.value; 
        }
        valOfFirsInput += '0';
        input1.value = valOfFirsInput;
        return input1.value; 
    }else if(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):$/.test(valOfFirsInput)){
        if(/^[0-9]:$/.test(valOfFirsInput)){
            valOfFirsInput = '0' + valOfFirsInput + '00';
            input1.value = valOfFirsInput;
            return input1.value;
        }
        valOfFirsInput += '00';
        input1.value = valOfFirsInput;
        return input1.value;
    }else{
        input1.value = "Oops, smth wrong"; 
    }
}


function checkSecondInput(){
let input2 = document.getElementsByClassName("second-input")[0];
let valOfSecondInput = input2.value;
let mainRegExp = /^([0-9][0-9]):[0-5][0-9]$/;
let regExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3])$/;
let secRegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5]$/;
let thirdRegExp = /^[0-9]:[0-5]$/;
let fourthRegExp = /^[0-9]:[0-9][0-5]$/;
    if(mainRegExp.test(input2.value)){
        if(fourthRegExp.test(input2.value)){
            valOfSecondInput = '0' + valOfSecondInput;
            input1.value = valOfSecondInput;
            return input2.value;
        }
        return input2.value;
    }else if(regExp.test(input2.value)){
            if(valOfSecondInput >= 10){
                valOfSecondInput += ':00';
            }else if(valOfSecondInput < 10){
                valOfSecondInput = '0' + valOfSecondInput + ':00';
        }
        input2.value = valOfSecondInput;
        return input2.value; 
    }else if(secRegExp.test(input2.value)){
        if(thirdRegExp.test(input2.value)){
            valOfSecondInput = '0' + valOfSecondInput +'0';
            input2.value = valOfSecondInput;
            return input2.value; 
        }
        valOfSecondInput += '0';
        input2.value = valOfSecondInput;
        return input2.value; 
    }else if(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):$/.test(valOfSecondInput)){
        if(/^[0-9]:&/.test(valOfSecondInput)){
            valOfSecondInput = '0' + valOfSecondInput + '00';
            input2.value = valOfSecondInput;
            return input2.value;
        }
        valOfSecondInput += '00';
        input2.value = valOfSecondInput;
        return input2.value;
    }else{
        input2.value = "Oops, smth wrong"; 
    }
}