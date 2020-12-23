function checkInputs(input){
let valOfInputs = input.value;
let mainRegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
let regExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3])$/;
let secRegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5]$/;
let thirdRegExp = /^[0-9]:[0-5]$/;
let fourthRegExp = /^[0-9]:[0-9][0-5]$/;
let fivthRegExp = /^[0][0-9]$/
/* console.log(input); */
    if(mainRegExp.test(input.value)){
        if(fourthRegExp.test(input.value)){
            valOfInputs = '0' + valOfInputs;
            input.value = valOfInputs;
            return input.value;
        }
        return input.value;
    }else if(fivthRegExp.test(input.value)){
        valOfInputs += ':00';
        input.value = valOfInputs;
        return input.value;
    }else if(regExp.test(input.value)){
        if(valOfInputs >= 10){
            valOfInputs += ':00';
        }else if(valOfInputs < 10){
            valOfInputs = '0' + valOfInputs + ':00';
        }
        input.value = valOfInputs;
        return input.value; 
    }else if(secRegExp.test(input.value)){
        if(thirdRegExp.test(input.value)){
            valOfInputs = '0' + valOfInputs +'0';
            input.value = valOfInputs;
            return input.value; 
        }
        valOfInputs += '0';
        input.value = valOfInputs;
        return input.value; 
    }else if(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):$/.test(valOfInputs)){
        if(/^[0-9]:$/.test(valOfInputs)){
            valOfInputs = '0' + valOfInputs + '00';
            input.value = valOfInputs;
            return input.value;
        }
        valOfInputs += '00';
        input.value = valOfInputs;
        return input.value;
    }else{
        input.value = ""; 
    }
}

let curIndex = 0;
const generateRowId = () => {
    curIndex ++;
    return `row_${curIndex}`;
}


const add = document.getElementById("but1");
add.addEventListener('click', addElements);
function addElements(){
    console.log("clicked");
     let div = document.createElement('div');
     let secDiv = document.createElement('div');
    div.innerHTML = ` <div class="main-div" id="row_${generateRowId()}">
    <button onclick ="remove(this)" id="but2"><img src="src/del.jpg" width="25px" height="25px"></button>
    <input id='inp' type="text" class="first-input" placeholder="Input the time" onchange="checkInputs(this)" value="">
    -
    &nbsp;<input type="text" class="second-input" placeholder="Input the time" onchange="checkInputs(this)" value="">
    <div class="other-days">
        <label class="days">
            <span class="monday">M</span>
            <input type="checkbox" class="checkbox" name="values" value="0" onchange="refreshDisabledStates(this)"/>
            <span class="fake"></span>
        </label>
    </div>
    <div class="other-days">
        <label class="days">
            <span class="tuesday">T</span>
            <input type="checkbox" class="checkbox" name="values" value="1" onchange="refreshDisabledStates(this)"/>
            <span class="fake"></span>
        </label>
    </div>
    <div class="other-days">
        <label class="days">
            <span class="wednesday">W</span>
            <input type="checkbox" class="checkbox" name="values" value="2" onchange="refreshDisabledStates(this)"/>
            <span class="fake"></span>
        </label>
    </div>
    <div class="other-days">
        <label class="days">
            <span class="thursday">T</span>
            <input type="checkbox" class="checkbox" name="values" value="3" onchange="refreshDisabledStates(this)"/>
            <span class="fake"></span>
        </label>
    </div>
    <div class="other-days">
        <label class="days">
            <span class="friday">F</span>
            <input type="checkbox" class="checkbox" name="values" value="4" onchange="refreshDisabledStates(this)"/>
            <span class="fake"></span>
        </label>
    </div>
    <div class="other-days">
        <label class="days">
            <span class="saturday">S</span>
            <input type="checkbox" class="checkbox" name="values" value="5" onchange="refreshDisabledStates(this)"/>
            <span class="fake"></span>
        </label>
    </div>
    <label class="days">
        <span class="sunday">S</span>
        <input type="checkbox" class="checkbox" name="values" value="6" onchange="refreshDisabledStates(this)"/>
        <span class="fake"></span>
    </label>
    <div class="error">Erorr, please input the correct value!</div>
    </div>`
    document.querySelector('.others').appendChild(div);
    refreshDisabledStates();
} 
const remove = (item) => {curIndex--; item.parentNode.remove(); refreshDisabledStates();}
const submit = document.getElementById('but');
submit.addEventListener('click', onSubmit);

function onSubmit(){
    const indexList = [];
    const rows = document.getElementsByClassName("main-div");
        for (let i = 0; i < rows.length; i++) { 
           const row = rows[i];
           const rowsOfCheckboxes = row.getElementsByClassName("checkbox");
           const days = collectCheckboxesValues(rowsOfCheckboxes);
           
           const valueOfFirstInput = row.getElementsByClassName("first-input");
           const valueOfSecondInput = row.getElementsByClassName("second-input");
           const hours = collectHoursData(valueOfFirstInput, valueOfSecondInput);

           const rowData = {    
               days,
               hours,
           };

           let map = new Map;
           map.set( 0, 'Monday');
           map.set( 1, 'Tuesday');
           map.set( 2, 'Wednesday');
           map.set( 3, 'Thursday');
           map.set( 4, 'Friday');
           map.set( 5, 'Saturday');
           map.set( 6, 'Sunday');
           
            const isCheked = row.getElementsByClassName("checkbox");
            const error = row.getElementsByClassName("error");
  
            const arrAll = [];
            for(let i = 0; i < isCheked.length; i++){
                arrAll.push(isCheked[i].checked? true : false);
            }            
            const isAllFalse = (element) =>  element == false;

                for(let i = 0; i < error.length; i++){
                    if(rowData.hours[1] < rowData.hours[0] || rowData.hours[1] === rowData.hours[0] || rowData.hours[0] == '' || rowData.hours[1] == '' || arrAll.every(isAllFalse)){
                        error[i].style.display = 'block';
                        document.getElementById(`result`).style.display = 'none';
                    }else{
                        error[i].style.display = 'none';    
                        document.getElementById(`result`).innerHTML = `Work days of our restaurant is: ${rowData.days.map( dayNumb => map.get(dayNumb))}  
                        and work hours of these or this day(s) is from ${rowData.hours[0]} to ${rowData.hours[1]} `; 
                        document.getElementById(`result`).style.display = 'block';
                    }
                }
            indexList.push(rowData);
        }
    console.log(indexList);
}


function collectCheckboxesValues(checkboxesList){
    const activeDays = [];
    for(let i = 0; i < checkboxesList.length; i++){
        if(checkboxesList[i].checked){
            activeDays.push(+checkboxesList[i].value);     
        }  
    }
    return activeDays;
}

function collectHoursData(hoursFirstList, hoursSecondList){
    const hours = [];
    for(let i = 0; i < hoursFirstList.length; i++){
        for(let j = 0; j < hoursSecondList.length; j++){
        hours.push(hoursFirstList[i].value, hoursSecondList[j].value);
        }
    }
    return hours;
}

function refreshDisabledStates(){
    let checkedIndex = [];
    const cboxes = document.getElementsByClassName('checkbox');
    for(let i = 0; i < cboxes.length; i++){
        if(cboxes[i].checked){
            checkedIndex.push(+cboxes[i].value);
        }
    }
    checkedIndex = Array.from(new Set((checkedIndex)));
    for(let i = 0; i < cboxes.length; i++){
        cboxes[i].disabled = !cboxes[i].checked && checkedIndex.includes(+cboxes[i].value);
    }
    
}
