const moveDodger = document.getElementById('dodger')

function moveDodgerLeft (){
    const leftNum = moveDodger.style.left.replace("px", "");
    const left = parseInt(leftNum, 10);

    if(left > 0 ){
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function(e){
    if(e.key === "ArrowLeft"){
        moveDodgerLeft()
    }
})

function moveDodgerRight(){
    const leftNum = moveDodger.style.left.replace("px", "");
    const left = parseInt(leftNum, 10);

    if(left < 180){
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight"){
        moveDodgerRight()
    }
})
