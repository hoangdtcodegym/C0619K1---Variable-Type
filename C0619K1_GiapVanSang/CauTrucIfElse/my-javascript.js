function dangnhap() {
    let userName=document.getElementById("userName").value;
    let passWord=document.getElementById("passWord").value;

 if (userName=="admin" && passWord=="master"){
        alert("Đăng Nhập Thành Công");
    } else{
        alert("Đăng nhập thất bại");
    }

}