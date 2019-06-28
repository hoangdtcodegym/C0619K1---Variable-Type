function chuyen_doi() {
    let kq;
    let input = document.getElementById('input').value;
    let from = document.getElementById('1').value;
    let to = document.getElementById('2').value;
    if (from == "VNĐ" && to == "USD"){
        kq= input/23;
        alert("Số tiền bạn muốn quy đổi ra là " + kq);
    }
    else if (from == "USĐ" && to == "VNĐ"){
        kq= input*23;
        alert("Số tiền bạn muốn quy đổi ra là " + kq);
    }
    else{
        alert('Mời bạn chọn lại tiền tệ');
    }

}

