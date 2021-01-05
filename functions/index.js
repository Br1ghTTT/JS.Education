function sortByType(){
    let arrTypes = [ 1, 'str', true, 'str2', 7, undefined, false , 1n , null, prompt ];

    let obj = {
        string: [],
        number: [],
        bigInt: [],
        undefined: [],
        boolean: [],
        object: [],
        function: [],
    }

    for(let i = 0; i < arrTypes.length; i++){
        const check = typeof arrTypes[i];
        switch(check){
            case 'string':
                obj.string.push(arrTypes[i]);
                break;
            case 'number':
                obj.number.push(arrTypes[i]);
                break;
            case 'bigint':
                obj.bigInt.push(arrTypes[i]);
                break;
            case 'undefined':
                obj.undefined.push(arrTypes[i]);
                break;
            case 'boolean':
                obj.boolean.push(arrTypes[i]);
                break;
            case 'object':
                obj.object.push(arrTypes[i]);
                break;
            case 'function':
                obj.function.push(arrTypes[i]);
                break;
            default:
                console.log("Whoops");
                break;
        }
    }
    console.log(obj);
}
sortByType();


function game(){
    const RANGE_FORM = prompt(`Input the range from (min number is 0) `);
        if( RANGE_FORM < 0 || isNaN(parseInt(RANGE_FORM)) || RANGE_FORM.trim() == "" ){
            throw Error(`Please input the correct number`);
        }
    let range_from = +RANGE_FORM;
    const RANGE_TO = +prompt(`Input the range to (the range has to be 10 steps)`);

        if(RANGE_TO - 10  == range_from){
            let range_to = RANGE_TO;
            let rand = Math.floor(Math.random() * (range_from - range_to)) + range_to;
            console.log(rand);
            let res = 4;
            let resOfConfirm;
            while( res >= 1 ){
                    let attempts = +prompt(`Guess the numer from ur range. U have ${res} attempts!`);
                    if(attempts == rand){
                        alert(`Our congratulations! U win!`);
                        resOfConfirm = confirm("Do u want to play again?")
                            if(resOfConfirm){
                                game();
                            }
                        break;
                    }else{
                        if(res == 1 ){
                            alert(`Sry, but u lose!`);
                            resOfConfirm = confirm(" Press 'OK' to 'start the game'!`")
                                if(resOfConfirm){
                                    game();
                                }
                            break;
                        }else{
                            alert(`Incorrect!`);
                        }
                    }
                res--;
            }
        }else{
            throw Error("Please input the correct number");
        } 
}

const minToString = v => 60 * v;
const minToNumber = v => v / 60;
let regExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
let secRegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3])$/;
function getTimeRanges(from = '00:00', to = '23:30', interval = 30) {
    if(regExp.test(from) || secRegExp.test(from)){
        if(regExp.test(to) || secRegExp.test(to)){
            if(interval === 0 || interval === 15 || interval === 30 || interval === 45 || interval === 60){
                if(from <= to){
                    function min60int (nFrom, nTo) { 
                        const ranges = []; 
                            for (let i = nFrom.hour; i <= nTo.hour + nTo.minutes; i += 1 ) {
                               ranges.push(i); 
                            }
                            return ranges;
                    }
                    function min30int (nFrom, nTo) { 
                        const ranges = []; 
                            for (let i = nFrom.hour; i <= nTo.hour + nTo.minutes; i += 0.5 ) {
                                
                               ranges.push(i); 
                            }
                            return ranges;
                    }
                    function min15int (nFrom, nTo) {
                        const ranges = []; 
                            for (let i = nFrom.hour; i <= nTo.hour + nTo.minutes; i += 0.25 ) {    
                               ranges.push(i); 
                            }
                            return ranges;
                    }
                
                    function min0int (nFrom, nTo) {
                        nFrom = timeToNumber(from);
                        nTo = timeToNumber(to);
                        let ranges = [];
                        while (nFrom.hour <= nTo.hour) {
                            if (nFrom.hour === nTo.hour) {
                                for (let i = nFrom.minutes; i <= nTo.minutes; i++) {
                                    if (i < 10) {
                                        i += '0';
                                    }
                                    let newTime = `${nFrom.hour}:${i}`
                                    ranges.push(newTime);
                                }
                                break;
                            }
                            if (nFrom.hour < 10) {
                                nFrom.hour = '0' + nFrom.hour;
                            }
                            for (let i = nFrom.minutes; i < 60; i++) {
                                if (i < 10) {
                                    i = '0' + i;
                                }
                                let newTime = `${nFrom.hour}:${i}`
                                ranges.push(newTime);
                            }
                            nFrom.hour++
                            nFrom.minutes = 0;
                        }
                        return ranges;
                    }
                    let intervalResult = [];
                        if( interval === 60){
                            const nFrom = stringToNumber(roundMinutes(from, 60))
                            const nTo = stringToNumber(roundMinutes(to, 60));
                            intervalResult = min60int(nFrom, nTo)

                            return mapIntervalNumberTotring(intervalResult);
                        }
                        else if( interval === 30){
                            const nFrom = stringToNumber(roundMinutes(from, 30))
                            const nTo = stringToNumber(roundMinutes(to, 30));
                            intervalResult = min30int(nFrom, nTo);
                
                            return mapIntervalNumberTotring(intervalResult);
                        }else if(interval == 15){
                            const nFrom = stringToNumber(roundMinutes(from, 15))
                            const nTo = stringToNumber(roundMinutes(to, 15));
                            intervalResult = min15int(nFrom, nTo);
                
                            return mapIntervalNumberTotring(intervalResult);
                        }else if( interval === 0){
                            const nFrom = timeToNumber(roundMinutes(from, 0))
                            const nTo = timeToNumber(roundMinutes(to, 0));
                            intervalResult = min0int(nFrom, nTo);
                
                            return intervalResult;
                        }
                }else{
                    throw Error("'to' can't be bigger than 'from'")
                }
            }else{
                throw Error("Input the corrects hours!"); 
            }            
        }else{
            throw Error("Input the corrects hours!"); 
        }
    }else{
        throw Error("Input the corrects hours!");
    }     
}
    
function roundMinutes(t, rounder) {
    if (rounder === 0) {
        const hour = t.split(':')[0];
        return `${hour}:00`
    }
    function format(v) { return v < 10 ? '0' + v: v; }
        var m = t.split(':').reduce(function (h, m) { return h * 60 + +m; });
        m = Math.ceil(m / rounder) * rounder;
        return [Math.floor(m / 60), m % 60].map(format).join(':');
}
function stringToNumber (time) {
    const [hours, minutes] = time.split(":");
    return {
        hour: Number(hours),
        minutes: minutes.includes('00') ? 0 : minToNumber(Number(minutes))
    }
}
function mapIntervalNumberTotring (rangeList) {
    return rangeList.map(function callback (currentValue) {
    let hours = Math.trunc(currentValue); 
        if (hours < 10) {
            hours = '0' + hours;
        }
    let nMinutes = currentValue % 1;
    let minutes = minToString(nMinutes);
        if (minutes < 10) {
            minutes = minutes + '0'
        }
        let result =   `${hours}:${minutes}`
    return result;
        });
} 
function timeToNumber (time) {
    const [hours, minutes] = time.split(":");
    return {
        hour: Number(hours),
        minutes: Number(minutes)
    }
}
    

            

console.log( getTimeRanges('09:00', '10:30', 0));
console.log( getTimeRanges('13:00', '15:30', 15) );
console.log( getTimeRanges());
console.log( getTimeRanges('13:00', '16:00', 60) );




/*
getTheHours('22:00', '23:00', 30); 
range(1, 11, 2);
  function getTimeRanges(interval, from, to) {
    const ranges = [];
    const ranges2 = [];
    const date = new Date();
    const format = {
        hour: 'numeric',
        minute: 'numeric',
    };
    const dateTo = new Date();
    const language = window.navigator.language = "ukr";
        if(interval === 0 ){
            for (let minutes = 0; minutes < 24 * 60; minutes = minutes + 1) {
                date.setHours(from);
                dateTo.setHours(to);
                date.setMinutes(minutes);
                ranges.push(date.toLocaleTimeString(language, format));
            }
            return ranges;
        }
        else{
            for (let minutes = 0; minutes < 24 * 60; minutes += interval) {
                date.setHours(from);
                dateTo.setHours(to);
                date.setMinutes(minutes);
                ranges.push(date.toLocaleTimeString(language, format));
                ranges2.push(dateTo.toLocaleDateString(language, format));
                if(ranges == ranges2)
                if(date.setHours(from) == dateTo.setHours(to)){
                    /* ranges.push(date.toLocaleTimeString(language, format));  */
              /*   break;
                }
            }
        return ranges;
    }
}

console.log (getTimeRanges(15, 15, 22));    */
    
    

