// JS file for travel between different files.
let levelNum = 0;

let goToLevel = (level, levelNum) => {
    if (level === "index.html")
    {
        levelNum = 0;
    }

    window.location.href = level;
    levelNum = levelNum + 1;
    console.log(levelNum);
}

function gameOverPassword(level){
    let password = document.getElementById('hidden');
    
    switch(level)
    {
        case 1:
            password.textContent = "1234";
            break;
        case 2:
            password.textContent = "4567";
            break;
        case 3:
            password.textContent = "8675";
            break;
        case 4:
            password.textContent = "0000";
            break;
        default:
            password.textContent = "Error: No password.";
    }
    // Use the .html file name as an argument for the generated password.
}

document.getElementById('new-game').addEventListener("click", function(){
    goToLevel('createUser.html')
});

document.getElementById('password').addEventListener("click", function(){
    goToLevel('passwordInsert.html')
});