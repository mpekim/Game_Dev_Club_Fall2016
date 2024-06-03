// JS file for travel between different files.

let goToLevel = (level) => {
    window.location.href = level;
}

document.getElementById('pass').addEventListener(click, function(){
    goToLevel('createUser.html')
});