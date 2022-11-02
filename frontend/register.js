function displayMessage(){
    let themsg = document.getElementById("txt").value;
    if (themsg){
        document.getElementById("join-text").innerHTML = themsg;
    }
    else{
        document.getElementById("join-text").innerHTML = "No message set";
    }
}