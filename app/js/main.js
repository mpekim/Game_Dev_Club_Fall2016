// Main JS file.
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
// on password input.
function enterPassword(){
    // Check to make sure that the password
    // is correct. If so, go to the appropriate
    // level.
    let password = document.getElementById('input_password').value;

    switch (password){
        case localStorage.getItem("l1p"):
            goToLevel('level1.html');
            break;
        case localStorage.getItem("l2p"):
            goToLevel('level2.html');
            break;
        case localStorage.getItem("l3p"):
            goToLevel('level3.html');
            break;
        case localStorage.getItem("l4p"):
            goToLevel('level4.html');
            break;
        case localStorage.getItem("super"):
            goToLevel('endGame.html');
            break;
        default:
            const errScreen = document.getElementById('hidden');
            errScreen.textContent = "Error: Invalid password.";

            //errScreen.appendChild(createPasswordError("Error: Invalid Password."));
    }
    // Switch case for passwords.
    return (false);
}

function enterUsername(username){
    const difficulty = document.getElementById('difficulty').value;
    console.log(difficulty);
    let lives = 3;

    switch (difficulty){
        case "Easy":
            lives = 3;
            break;
        case "Medium":
            lives = 2;
            break;
        case "Hard":
            lives = 1;
            break;
        default:
            lives = 3;
    }

    const player1 = new User(username, "1234", lives);
    const userScreen = document.getElementById('user-text');

    userScreen.textContent = "User Created!\n" + player1.getUsername();
    console.log(player1.getUsername() + player1.getLives());

    return player1;
}

// Pre-Condition: This function accepts no parameters.
// Post-Condition: Function will create two objects and test them.
function testMode(){
    const bob = new User("Bob", 8675, 3);
    const steve = new User("Steve", 3091, 2);
    
    bob.presentUser();
    steve.presentUnser();

    console.log("Testing getUsername: " + bob.getUsername());
    console.log("Testing getPassword: " + bob.getPassword());
    console.log("Testing getLives: " + bob.getLives());
}

function createMessage(id, message){
    let item = document.getElementById(id);
    item.textContent = message;
    return item;
}

function loseHealth(){
    if (player1.lives > 1){
        player1.lives = player1.lives - 1;
        localStorage.setItem("p1", JSON.stringify(player1));
        lives_counter.innerHTML = 'Lives left: ' + player1.lives;
    }
    else{
        goToLevel("wrong.html");
    }
}
// Function declarations.

const bob = new User("Bob", 8675, 4);
let player1 = localStorage.getItem("p1");
let lives_counter = document.getElementById("lives-text");

player1 = JSON.parse(player1);

if (lives_counter){
    lives_counter.innerHTML = "Lives left: " + player1.lives;
}