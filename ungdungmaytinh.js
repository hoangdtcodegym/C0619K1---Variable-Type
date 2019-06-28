function ungDungMayTinh(tinh) {
    let soa = Number(document.getElementById('inputA').value);
    let sob = Number(document.getElementById('inputB').value);
    let result;
    switch (tinh){
        case 'cong':
            result = (soa + sob);
            break;
        case 'tru':
            result = (soa - sob);
            break;
        case 'nhan':
            result = (soa * sob);
            break;
        case 'chia':
            result = (soa / sob);
            break;
    }
document.getElementById('result').innerText=result;
}

