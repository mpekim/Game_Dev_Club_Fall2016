// JS file for travel between different files.
/*let l1p = generatePassword();
let l2p = generatePassword();
let l3p = generatePassword();
let l4p = generatePassword();
let superPass = generatePassword();*/

// Original values: 1234, 4567, 8675, 0000, 5678

let goToLevel = (level) => {
    // Set the level password value to current level, and then travel to page.
    switch(level){
        case "level1.html":
            localStorage.setItem("level", 1);
            break;
        case "level2.html":
            localStorage.setItem("level", 2);
            break;
        case "level3.html":
            localStorage.setItem("level", 3);
            break;
        case "level4.html":
            localStorage.setItem("level", 4);
            break;
        case "index.html":
            localStorage.setItem("level", 0); 
            break;       
    }
    
    window.location.href = level;
}

function generatePassword(){
    let password = "";

        for (var i = 0; i < 4; i++){
            randInt = Math.floor(Math.random() * 10);
            password = password + String(randInt);
        }
        return password;
}

function gameOverPassword(){
    let password = document.getElementById("hidden");
    let level = localStorage.getItem("level");
    console.log(level);
    
    switch(level)
    {
        case "1":
            password.textContent = localStorage.getItem("l1p");
            break;
        case"2":
            password.textContent = localStorage.getItem("l2p");
            break;
        case "3":
            password.textContent = localStorage.getItem("l3p");
            break;
        case "4":
            password.textContent = localStorage.getItem("l4p");
            break;
        default:
            password.textContent = "Error: No password.";
    }
    // Use the .html file name as an argument for the generated password.
}

// Try to get these Event Listeners to work, or get rid of them.
document.getElementById('new-game').addEventListener("click", function(){
    goToLevel('createUser.html')
});

document.getElementById('password').addEventListener("click", function(){
    goToLevel('passwordInsert.html')
});
