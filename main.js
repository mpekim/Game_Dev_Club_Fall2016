class User{
    constructor(username, password, lives){
        this.username = username;
        this.password = password;
        this.lives = lives;
    }

    getUsername(){
        console.log(this.username);
    }
    
    getPassword(){
        console.log(this.password);
    }

    getLives(){
        console.log(this.lives);
    }

    setUsername(newUsername){
        this.username = newUsername;
    }

    setPassword(newPassword){
        this.password = newPassword;
    }

    setLives(newLives){
        this.lives = newLives;
    }

    presentUser(){
        console.log("Username: " + this.username);
        console.log("Password: " + this.password);
        console.log("Lives Left: " + this.lives);
    }
}
// Class for User data.

function startProgram(){
    alert("Testing to ensure that the function works as intended.");
    var url = "index.html";
    window.location.href = url;
}

function returnToIndex(){
    var url = "index.html";
    window.location.href = url;

    const user1 = new User("Mike", 1234);
    user1.presentUser();
}

function goToPasswordInsert(){
    var url = "passwordInsert.html";
    window.location.href = url;
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
        case 5678:
            endGame();
            break;
        default:
            console.log("Sorry, password is incorrect. Please try again.");
    }
}

function goToLevel1(){
    var url = "level1.html";
    window.location.href = url;
}

function goToLevel2(){
    var url = "level2.html";
    window.location.href = url;
}

function goToLevel3(){
    var url = "level3.html";
    window.location.href = url;
}

function goToLevel4(){
    var url = "level4.html";
    window.location.href = url;
}

function endGame(){
    var url = "endGame.html";
    window.location.href = url;
}

function goToWrong()
{
    var url = "wrong.html";
    window.location.href = url;
}

function testMode(){
    // Add code here.
    const bob = new User("Bob", 8675, 3);
    bob.presentUser();
}