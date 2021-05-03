function AddItem() {
    var li = document.createElement("li");
    var UserInput = document.getElementById("UserInput").value;

    var t = document.createTextNode(UserInput);
    li.appendChild(t);

    document.getElementById("NewUl").appendChild(li);
    document.getElementById("UserInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("x");
    span.className = "Close";
    span.appendChild(txt);
    li.appendChild(span);

    var Close = document.getElementsByClassName("Close");
    var i;
    for (i = 0; i < Close.length; i++) {
        Close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
function ClearAll() {
    var ul = document.getElementById("NewUl");
    if (ul) { 
        while (ul.firstChild) { 
            ul.removeChild(ul.firstChild); 
        } 
    }
}
var list = document.querySelector("ul");
list.addEventListener("click", function(tick) {
    if (tick.target.tagName === "LI") {
        tick.target.classList.toggle("checked");
    }
}, false);