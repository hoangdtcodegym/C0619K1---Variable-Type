function xuly() {
    let browser=document.getElementById("browser").value;

    switch (browser) {
        case 'Edge':
            document.getElementById("result").textContent="You've got the Edge!!";
            break;
        case "Chorm":
        case "Firefox":
        case "Safari":
        case "Opera":
          document.getElementById("result").textContent="Okay we support these browser too";
            break;
        default:
            document.getElementById("result").textContent="We hope that this page look ok!";

    }

}
function check() {
    let a=parseInt(prompt('Mời bạn nhập vào số a'));

    switch (a) {
        case 0:
            alert("Số 0");
            break;
        case 1:
            alert ("Số 1");
            break;
        case 2:
        case 3:
            alert("2, 3");
            break;

    }

}
function CheckNumBer() {
    let so=Number(document.getElementById("so").value);
    if (so>0)
        alert("1");
    else if(so<0)
        alert("-1");
    else{
        alert(0);
    }
}