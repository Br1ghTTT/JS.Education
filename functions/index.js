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
            /*console.log(rand); */
            let res = 4;
            while( res >= 1 ){
                    let attempts = +prompt(`Guess the numer from ur range. U have ${res} attempts!`);
                    if(attempts == rand){
                        alert(`Our congratulations! U win! Press 'OK' to return to begin and click the button 
                                            'start the game'!`);
                        break;
                    }else{
                        if(res == 1 ){
                            alert(`Sry, but u lose! Press 'OK' to return to begin and click the button         
                                            'start the game'!`);
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