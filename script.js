// var character = document.getElementById("character");
// var block = document.getElementById("block");
// var gameStarted = false;
// var intervalId;
// var initialCharacterTop;
// var initialBlockLeft;
// var initialBlockAnimation;

// window.onload = function(){
//     document.getElementById("startButton").focus();
//     initialCharacterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     initialBlockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     // initialBlockAnimation = block.style.animation;
// };

// // window.addEventListener("keydown", function(e){
// //     if(e.code === ' '){
// //         e.preventDefault();
// //     }
// // });

// document.getElementById("startButton").addEventListener("click", function(){
//     if(!gameStarted){
//         gameStarted = true;
//         resetGame();
//         startGame();
//         startBlockAnimation();
//     }
// });

// function resetGame(){
//     clearInterval(intervalId);
//     gameStarted = false;
//     character.classList.remove("animate");
//     character.style.top = initialCharacterTop + "px";
//     // initialBlockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     block.style.left = initialBlockLeft + "px";
//     // block.style.animation = initialBlockAnimation;
//     // startBlockAnimation();    
//     // block.style.animation = "block 1s infinite linear";
//     // gameStarted = false;
// }

// // function startBlockAnimation(){
// //     var blockLeft = 480;
// //     intervalId = setInterval(function () {
// //         if(!gameStarted) return;
// //         blockLeft -= 1;
// //         if (blockLeft < -20){
// //             blockLeft = 500;
// //         }
// //     block.style.left = blockLeft + "px";
// //     updateBlock();
// // }, 10);
// // }

// function startBlockAnimation(){
//     block.style.animation = "block 1s infinite linear";
//     startGame();
//     setInterval(checkDead, 10);
// }

// document.addEventListener("keydown", function(event){
//     if (event.key === ' '){
//         jump();
//     }
// });

// function startGame(){
//     intervalId = setInterval(checkDead, 10);
//     // startBlockAnimation();
// }

// function jump(){
//     if(character.classList.contains("animate")){
//         return;
//     }
//     character.classList.add("animate");
//     setTimeout(removeJump, 300);
// };

// function removeJump(){
//     character.classList.remove("animate");
// }

// function updateBlock(){
//     if(!gameStarted) return;
//     var initialBlockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     if (initialBlockLeft <= -20){
//         block.style.left = '500px';
//     }else{
//         block.style.left = (initialBlockLeft - 1) + 'px';
//     }
//     checkDead();
// }

// function checkDead(){
// if (!gameStarted) return;
// const characterRight = parseInt(window.getComputedStyle(character).getPropertyValue("left")) + 20;
// const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
// if(characterRight >= blockLeft){
//     gameOver();
// }
// }
// // function checkDead(){
// //     if(!gameStarted) return;
// //     const characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
// //     const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
// //     const blockWidth = parseInt(window.getComputedStyle(block).getPropertyValue("width"));
// //     if (characterLeft + 20 >= blockLeft && characterLeft <= blockLeft + blockWidth){
// //         gameOver();
// //     }
// // }
//     // const characterRect = character.getBoundingClientRect();
//     // const blockRect = block. getBoundingClientRect();
//     // if(characterRect.right >= blockRect.left && blockRect.left && characterRect.left <= blockRect.right){
//     //     gameOver();
//     // }
// //}

// function gameOver(){
//     clearInterval(intervalId);
//     gameStarted = false;
//     alert("Game Over");
//     resetGame();
// }

// ChatGPT


// // var character = document.getElementById("character");
// // var block = document.getElementById("block");
// // var gameStarted = false;
// // var intervalId;
// // var initialCharacterTop;
// // var initialBlockLeft;
// // var initialBlockAnimation;

// // window.onload = function(){
// //     document.getElementById("startButton").focus();
// //     initialCharacterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
// //     initialBlockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
// //     // initialBlockAnimation = block.style.animation;
// // };

// // // window.addEventListener("keydown", function(e){
// // //     if(e.code === ' '){
// // //         e.preventDefault();
// // //     }
// // // });

// // document.getElementById("startButton").addEventListener("click", function(){
// //     if(!gameStarted){
// //         gameStarted = true;
// //         resetGame();
// //         startGame();
// //         startBlockAnimation();
// //     }
// // });

// // function resetGame(){
// //     clearInterval(intervalId);
// //     gameStarted = false;
// //     character.classList.remove("animate");
// //     character.style.top = initialCharacterTop + "px";
// //     // initialBlockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
// //     character.classList.add("animate");
// //     block.style.left = initialBlockLeft + "px";
// //     // block.style.animation = initialBlockAnimation;
// //     // startBlockAnimation();    
// //     // block.style.animation = "block 1s infinite linear";
// //     // gameStarted = false;
// // }

// // // function startBlockAnimation(){
// // //     var blockLeft = 480;
// // //     intervalId = setInterval(function () {
// // //         if(!gameStarted) return;
// // //         blockLeft -= 1;
// // //         if (blockLeft < -20){
// // //             blockLeft = 500;
// // //         }
// // //     block.style.left = blockLeft + "px";
// // //     updateBlock();
// // // }, 10);
// // // }

// // function startBlockAnimation(){
// //     block.style.animation = "block 1s infinite linear";
// // }

// // document.addEventListener("keydown", function(event){
// //     if (event.key === ' '){
// //         jump();
// //     }
// // });

// // function startGame(){
// //     intervalId = setInterval(checkDead, 10);
// //     // startBlockAnimation();
// // }

// // function jump(){
// //     if(character.classList.contains("animate")){
// //         return;
// //     }
// //     character.classList.add("animate");
// //     // setTimeout(removeJump, 300);
// //     setTimeout(function(){
// //         removeJump();
// //         checkDead();

// //     }, 300);
// // }

// // function removeJump(){
// //     character.classList.remove("animate");
// // }

// // function updateBlock(){
// //     if(!gameStarted) return;
// //     var initialBlockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
// //     if (initialBlockLeft <= -20){
// //         block.style.left = '500px';
// //     }else{
// //         block.style.left = (initialBlockLeft - 1) + 'px';
// //     }
// //     checkDead();
// // }

// // // function checkDead(){
// // // if (!gameStarted) return;
// // // const characterRight = parseInt(window.getComputedStyle(character).getPropertyValue("left")) + 20;
// // // const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
// // // if(characterRight >= blockLeft){
// // //     gameOver();
// // // }
// // // }
// // function checkDead(){
// //     if(!gameStarted) return;
// //     const characterRight = parseInt(window.getComputedStyle(character).getPropertyValue("left")) + 20;
// //     // const characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
// //     const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
// //     // const characterTop = parseInt(window.getComputedStyle(character.getPropertyValue("top"));
// //     // const blockWidth = parseInt(window.getComputedStyle(block).getPropertyValue("width"));
// //     if (blockLeft >= -20 && blockLeft <= 20 && characterTop > 130){
// //         gameOver();
// //     }
// // }
// //     // const characterRect = character.getBoundingClientRect();
// //     // const blockRect = block. getBoundingClientRect();
// //     // if(characterRect.right >= blockRect.left && blockRect.left && characterRect.left <= blockRect.right){
// //     //     gameOver();
// //     // }
// // //}

// // function gameOver(){
// //     clearInterval(intervalId);
// //     gameStarted = false;
// //     alert("Game Over");
// //     resetGame();
// // }


var character = document.getElementById("character");
var block = document.getElementById("block");
var gameStarted = false;
var intervalId;

window.onload = function(){
    document.getElementById("startButton").focus();
};

window.addEventListener("keydown", function(e){
    if(e.code === ' '){
        e.preventDefault();
    }
});

document.getElementById("startButton").addEventListener("click", function(){
    if(!gameStarted){
        gameStarted = true;
        startGame();
        startBlockAnimation();
    }
});

function startBlockAnimation(){
    block.style.animation = "block 1s infinite linear";
}

document.addEventListener("keydown", function(event){
    if(event.key === ' '){
        jump();
    }
});

function startGame(){
    intervalId = setInterval(checkDead, 10);
}

function jump(){
    if(character.classList.contains("animate")){
        return;
    }
    character.classList.add("animate");
    setTimeout(removeJump, 300);

    // checkDead();
};

function removeJump(){
    character.classList.remove("animate");
}

// var block = document.getElementById("block");
function checkDead(){
    if(!gameStarted) return;
    const characterRect = character.getBoundingClientRect();
    const blockRect = block. getBoundingClientRect();

    if(
        characterRect.right >= blockRect.left &&
        characterRect.left <= blockRect.right &&

        characterRect.bottom >= blockRect.top &&

        characterRect.top <= blockRect.bottom 

     ){
    // let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    // let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    // let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    // if(blockLeft <20 && blockLeft > -20 && characterTop < blockTop + 20){
        alert("Game Over");
        clearInterval(intervalId);
    }
}