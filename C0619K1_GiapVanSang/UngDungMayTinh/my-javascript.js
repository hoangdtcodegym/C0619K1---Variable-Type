let soThu1;
let soThu2;

function cong() {
    let so1=document.getElementById("so1").value;
    let so2=document.getElementById("so2").value;
    soThu1=parseFloat(so1);
    soThu2=parseFloat(so2);
    let tong=soThu1+soThu2;
    document.getElementById("hienthi").innerHTML=tong;
}
function tru() {
    let tru=soThu1-soThu2;
    document.getElementById("hienthi").innerHTML=tru;
}
function nhan() {
    let nhan=soThu1*soThu2;
    document.getElementById("hienthi").innerHTML=nhan;
}
function chia() {
    let chia=(soThu1/soThu2);
    document.getElementById("hienthi").innerHTML=chia;
}