function NewItem() {
    var li = document.createElement("li");
    var Input = document.getElementById("UserInput");
    var Text = document.createTextNode(Input);
    document.getElementById("NewUl").appendChild(li);
}