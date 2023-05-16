const express = require('express');
const app = express.app;
// Setting up express app.
// More code to come.

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
    // Accessor and Mutator functions.

    presentUser(){
        console.log("Username: " + this.username);
        console.log("Password: " + this.password);
        console.log("Lives Left: " + this.lives);
    }
}
// Class for User data.

function startProgram(){
   // alert("Testing to ensure that the function works as intended.");
    var url = "index.html";
    window.location.href = url;
}

function returnToIndex(){
    var url = "index.html";
    window.location.href = url;
}

function goToPasswordInsert(){
    var url = "passwordInsert.html";
    window.location.href = url;
}

// Pre-Condition: This function accepts an int argument (the password).
// Post-Condition: The user will be taken to the correct level based
// on password input.ks
function enterPassword(password){
    // Check to make sure that the password
    // is correct. If so, go to the appropriate
    // level

    switch (password){
        case 1234:
            goToLevel1();
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
    // Switch case for passwords.
}

// All level functions have the same structure.
// Pre-Condition: These functions accepts no arguments.
// Post-Condition: All functions will go to their intended
// locations.
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

// Pre-Condition: This function accepts no parameters.
// Post-Condition: Function will create two objects and test them.
function testMode()
{
    const bob = new User("Bob", 8675, 3);
    const steve = new User("Steve", 3091, 2);
    bob.presentUser();

    console.log("Testing getUsername: " + bob.getUsername());
    console.log("Testing getPassword: " + bob.getPassword());
    console.log("Testing getLives: " + bob.getLives());
}