let imgs = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"];

let myMain = document.getElementById("main");
// let ren = [];
// for (let i = 0; i < imgs.length; i++) {
//     ren[i] = imgs[Math.floor(Math.random() * imgs.length)]
// }

function showData() {
    for (let i = 0; i < imgs.length; i++) {
        myMain.innerHTML += `<div><img src="${imgs[i]}"></div>`
    }
}
showData();
showData();

let gameOver = new Audio("22.mp3");
let done = new Audio("11.mp3");

let runGame = new Audio("33.mp3");
let fllg = true;
let arr = [];
let allDivs = document.querySelectorAll("div");


allDivs.forEach(function(div) {
    div.addEventListener("click", (e) => {
        // console.log(div.firstChild)
        if(fllg) {
            div.firstChild.style.opacity = "1";
            if(arr.length === 0) {
                arr[0] = div;
            }
            else if(arr.length === 1) {
                arr[1] = div;
            }
            if(arr.length === 2) {
                setTimeout(checkImg, 1000);
            }
        }
        else {
            alert("error2");
        }

    })
})
function checkImg() {
    fllg = false;
    if(arr[0].firstChild.getAttribute("src") === arr[1].firstChild.getAttribute("src")) {
        done.play();
    }
    else {
        arr[0].firstChild.style.opacity = "0";
        arr[1].firstChild.style.opacity = "0";
        gameOver.play();
    }
    arr = [];
    fllg = true;
}
// ///////////////////////////////////////////////////
document.getElementById("run").onclick = function() {
    runGame.play();
    document.getElementById("run").style.display = "none";
    document.getElementById("stop").style.display = "block";
}
document.getElementById("stop").onclick = function() {
    runGame.pause();
    document.getElementById("stop").style.display = "none";
    document.getElementById("run").style.display = "block";
}
document.getElementById("load").onclick = function() {
    window.location.reload();
}
    //

    // document.onload = function() {
    // }
