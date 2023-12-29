//const express = require('express');
//const app = express.app;
// Setting up express app.
// More code to come.

class User{
    constructor(username, password, lives){
        this.username = username;
        this.password = password;
        this.lives = lives;
    }

    getUsername(){
       return this.username;
    }
    
    getPassword(){
        return this.password;
    }

    getLives(){
        return this.lives;
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

// Pre-Condition: This function accepts an int argument (the password).
// Post-Condition: The user will be taken to the correct level based
// on password input.ks
function enterPassword(password){
    // Check to make sure that the password
    // is correct. If so, go to the appropriate
    // level.
    switch (password){
        case "1234":
            goToLevel1();
            break;
        case "4567":
            goToLevel2();
            break;
        case "8675":
            goToLevel3();
            break;
        case "0000":
            goToLevel4();
            break;
        case "5678":
            endGame();
            break;
        default:
            const errScreen = document.querySelector("#err");

            errScreen.appendChild(createPasswordError("Error: Invalid Password."));
    }
    // Switch case for passwords.
}

function enterUsername(username){
    const player1 = new User(username, "1234", 3);

    const userScreen = document.querySelector("#user");

    userScreen.appendChild(createUserNotify("User created!"));
    userScreen.appendChild(createUserNotify(player1.getUsername()));

    return player1;
}

function gameOverPassword(){
    const password = document.querySelector("#ideMain");
    password.appendChild(createPasswordError("1234"));
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

function createPasswordError(error){
    let item = document.createElement('p');
    item.textContent = error;
    return item;
}

function createUserNotify(username){
    let item = document.createElement('h1');
    item.textContent = username;
    return item;
}