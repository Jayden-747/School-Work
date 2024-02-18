function saveFunction() {
    let nameInput = document.getElementById("answer").value;
    console.log(nameInput);
    let text = "Your input is " + nameInput + "\nOK or Cancel";
    if (confirm(text) == true) {
        text = "You pressed OK!";
        document.getElementById("name").innerHTML = nameInput;
    } else {
        text = "You canceled!";
    }
    document.getElementById("messageUpdate").innerHTML = text;
}