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
        default:
            console.log("Sorry, password is incorrect. Please try again.");
    }
}

function gotToLevel1(){
    window.location.href = "level1.html"
}