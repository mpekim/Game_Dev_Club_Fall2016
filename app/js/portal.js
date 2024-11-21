// JS file for travel between different files.

let goToLevel = (level) => {
    window.location.href = level;
}

document.getElementById('new-game').addEventListener("click", function(){
    goToLevel('createUser.html')
});

document.getElementById('password').addEventListener("click", function(){
    goToLevel('passwordInsert.html')
});