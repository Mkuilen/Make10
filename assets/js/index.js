function popup(){
    var name =  window.prompt("Enter your name to start the game");
    if (name == null || name == "") {
        window.location.href = 'index.html';
    } else {
        document.cookie = "name=" + name;
        window.location.href = 'game.html';
    }
}