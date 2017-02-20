//21

// check
//alert("connect!");

var one = document.querySelector("#one");
var two = document.querySelector("#two");

var reset = document.querySelector("#reset");

var oneScore = document.querySelector("#oneScore");    
var score = document.querySelector("#oneScore");    
var twoScore = document.querySelector("#twoScore");

var number = 21;
var sumOne = 0;
var sum = 0;
var sumTwo = 0;


// add eventlistener to button
reset.addEventListener("click", function () {
    oneScore.textContent = 0;
    twoScore.textContent = 0;
    oneCount = 0;
    twoCount = 0;
    oneScore.style.color = "white";
    twoScore.style.color = "white";
})

one.addEventListener("click", function () {
    var random = getRandomInt();
    sumOne += random;
    
    if (sumOne > 21) {
        oneScore.textContent = sumOne;
        oneScore.style.color = "red";
        twoScore.style.color = "green";
        alert("Player Two win");
        
    } else if (sumOne == 21) {
        oneScore.textContent = sumOne;
        oneScore.style.color = "green";
        twoScore.style.color = "red";
        alert("Player One win");
    } else {
         oneScore.textContent = sumOne;
    }
    
//    getNumber(sum);
});

two.addEventListener("click", function () {
    var random = getRandomInt();
    sumTwo += random;
    
    if (sumTwo > 21) {
        twoScore.textContent = sumTwo;
        twoScore.style.color = "red";
        oneScore.style.color = "green";
        alert("Player One win");
    } else if (sumTwo == 21) {
        twoScore.textContent = sumTwo;
        twoScore.style.color = "green";
        oneScore.style.color = "red";
        alert("Player Two win");
    } else {
        twoScore.textContent = sumTwo;
    }
    
});

//
//function getNumber(sum, oneScore, twoScore) {
//    var score = document.querySelector("#oneScore"); 
//        
//    var random = getRandomInt();
//    sum += random;
//    
//    if (sum > 21) {
//        score.textContent = sum;
//        score.style.color = "red";
////        twoScore.style.color = "green";
//        alert("Player Two win");
//    } else if (sum == 21) {
//        score.textContent = sum;
//        score.style.color = "green";
////        twoScore.style.color = "red";
//        alert("Player One win");
//    } else {
//         score.textContent = sum;
//    }
//    
//}

function getRandomInt() {

  return Math.floor(Math.random() * (11 - 1)) + 1;
    
}
