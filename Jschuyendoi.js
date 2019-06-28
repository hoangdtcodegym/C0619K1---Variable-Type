function chuyendoitiente() {
    let amount = document.getElementById('vaoamount').value;
    let from = document.getElementById('vaofrom').value;
    let to = document.getElementById('vaoto').value;
    let result;
    if (from == 'vnd' && to == 'usd') {
        result = amount / 23000;
    }else if (from == 'vnd' && to == 'usd') {
        result = amount;
    }   else if (from == 'usd' && to == 'vnd') {
        result = amount * 23000;
    }    else if (from == 'usd' && to == 'usd'){
            result = amount;
    }
    document.getElementById('result').innerHTML=result;

}