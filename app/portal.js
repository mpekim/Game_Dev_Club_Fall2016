// JS file for travel between different files.

let goToLevel = (level) => {
    window.location.href = level;
}

document.getElementById('l1').addEventListener(click, function(){
    goToLevel('level1.html');
});