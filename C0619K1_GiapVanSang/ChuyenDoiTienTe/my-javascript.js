
function convert() {
    let nhap = document.getElementById("sotien");
    let from = document.getElementById("from");
    let to = document.getElementById("to");
    let tien = parseFloat(nhap.value) * parseFloat(to.value) / parseFloat(from.value);
    document.getElementById("result").innerHTML = "Result: " + tien;
}