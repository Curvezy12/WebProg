var Cookie = {
    Count: 0,
    PerSecond: 0,
};

//Show default number of clicks in clicker Section
document.getElementById("Cookies").innerHTML =
Cookie.Count + " Cookies" + '<div id="CookiesPerSecond" style="font-size: 50%">per second: 0</div>'

document.getElementById("CookiesPerSecond").innerHTML =
"per second: " + Cookie.PerSecond


//--------------------------------------------------------------------------------------------------------

// Increase count when click cookie
function IncreaseByClick() {
    Cookie.Count += 1;
    document.getElementById("Cookies").innerHTML =
    Math.floor(Cookie.Count) + " Cookies" + '<div id="CookiesPerSecond" style="font-size: 50%">per second: ' + Cookie.PerSecond + '</div>'

};

// Increase by cookie per second
function UpdateCookie() {
    Cookie.Count += Cookie.PerSecond;
    document.getElementById("Cookies").innerHTML =
    Math.floor(Cookie.Count) + " Cookies" + '<div id="CookiesPerSecond" style="font-size: 50%">per second: ' + Cookie.PerSecond + '</div>'
    }
setInterval(UpdateCookie, 1000);

//--------------------------------------------------------------------------------------------------------


//Bakery Name
function BakeryName() {
    var txt;
    var Name = prompt("What Should your bakery's name be?");
    if (Name == null || Name == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = Name + "'s Bakery";
    }
    document.getElementById("BakeryName").innerHTML = txt;
};