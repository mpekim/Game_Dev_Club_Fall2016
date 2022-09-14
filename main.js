function startProgram(){
    alert("Testing to ensure that the function works as intended.");
}

function returnToIndex(){
    window.location.href = "index.html";
}

function goToPasswordInsert(){
    window.location.href = "passwordInsert.html";
}

function enterPassword(password){
    // Check to make sure that the password
    // is correct. If so, go to the appropriate
    // level

    switch (password){
        case 1234:
            gotToLevel1();
            break;
        case 4567:
            goToLevel2();
            break;
        case 8675:
            goToLevel3();
            break;
        case 0000:
            goToLevel4();
            break;
        default:
            console.log("Sorry, password is incorrect. Please try again.");
    }
}

function goToLevel1(){
    window.location.href = "level1.html";
}

function goToLevel2(){
    window.location.href = "level2.html";
}

function goToLevel3(){
    window.location.href = "level3.html";
}

function goToLevel4(){
    window.location.href = "level4.html";
}