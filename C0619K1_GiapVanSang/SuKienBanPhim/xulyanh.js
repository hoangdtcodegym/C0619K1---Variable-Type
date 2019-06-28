function lenTren(){
    let element=(document.getElementById("nobita"));
    element.style.top=parseInt((element.style.top))- 5 + 'px';
}
function xuongDuoi(){
    let element=(document.getElementById("nobita"));
    element.style.top=parseInt(element.style.top)+ 5 +'px';
}
function sangTrai() {
    let element=document.getElementById("nobita");
    element.style.left=parseInt(element.style.left) -5 +'px';

}
function sangPhai() {
    let element=document.getElementById("nobita");
    element.style.left=parseInt(element.style.left) + 5 +'px';

}
function nhandienkytu(evt) {
    switch (evt.key) {
        case 'a':
            sangTrai();
            break;
        case 'd':
            sangPhai();
            break;
        case "w":
            lenTren();
            break;
        case "s":
            xuongDuoi();
            break;

    }

}
function Load() {
    window.addEventListener('keydown',nhandienkytu);

}