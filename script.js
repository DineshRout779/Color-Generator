let bgc = document.querySelector(".color");
let color_name = document.querySelector(".hex");
let next = document.querySelector(".next");

window.onload = function(){
    let random = Math.floor(Math.random() * arr.length);
    bgc.style.backgroundColor = arr[random].bgcolor;
    color_name.innerText = arr[random].bgcolor;
}

next.addEventListener("click", function (e) {
    e.preventDefault();
    let random = Math.floor(Math.random() * arr.length);
    bgc.style.backgroundColor = arr[random].bgcolor;
    color_name.innerText = arr[random].bgcolor;
})