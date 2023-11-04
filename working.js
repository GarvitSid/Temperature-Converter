let submitB = document.getElementById('submit');
document.getElementById("result").textContent = "";
function submitAct(){
    let inputTemp = parseInt(document.getElementById('num').value);
    let tempSelected = document.getElementById('tempDifference');
    let valueTemp = tempDifference.options[tempSelected.selectedIndex].value;
    if (valueTemp == 'cel') {
        let fahrenheit = ((inputTemp * 9 / 5) + 32);
        document.getElementById("result").innerHTML= fahrenheit.toFixed(1) + '&#176;Celsius' ;
    }
    else {
        let celsius = ((inputTemp - 32) * 5 / 9);
        document.getElementById("result").innerHTML = celsius.toFixed(1) + '&#176;Fahrenheit';
    }
    
};
