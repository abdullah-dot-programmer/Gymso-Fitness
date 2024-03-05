const item = document.getElementById("item");
const bar = document.getElementById("bar");


item.style.right = "-300px";

bar.onclick = function ShowHide() {
    if (item.style.right == "-300px") {
        item.style.right = "0";
    } else {
        item.style.right = "-300px"
    }
}


