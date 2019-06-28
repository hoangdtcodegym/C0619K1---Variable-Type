function check() {
    let year = parseInt(document.getElementById("nam").value);
    let show = document.getElementById("hienthi");
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                show.textContent = "Năm Nhuận";
            } else {
                show.textContent = "Không phải năm nhuận";
            }

        } else {
            show.textContent = "Không phải năm nhuận"
        }
    } else {
        show.innerHTML = "Không phải năm nhuận";
    }
}

let imagebulb;

function turnon() {
    imagebulb = document.getElementById("myimage");
    imagebulb.src = "Image/pic_bulbon.gif";


}

function turnoff() {
    imagebulb.src = "Image/pic_bulboff.gif";

}

function change() {
    document.getElementById("demo").style.fontSize = "35px";

}