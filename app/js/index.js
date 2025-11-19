// JS code specifically for index file.
document.getElementById('password').addEventListener("click", function(){
    goToLevel('passwordInsert.html')
});

document.getElementById('new-game').addEventListener("click", function(){
    goToLevel('createUser.html')
});

// Debating to have more (or even all) buttons run on
// event listeners to save space in HTML files.