document.body.style.backgroundColor = "aqua"

let greeting = document.getElementById('greeting')
let username = prompt("Input username: ")
greeting.innerHTML = `Hello ${username}, Welcome!`
var h1s = document.getElementsByTagName("h1")
h1s[0].style.textAlign="center"
var h2s = document.getElementsByTagName("h2")
h2s[0].style.textAlign="center"

function currentDate() {
    var date = new Date()
    var hour = date.getHours()
    var day = date.getDate()
    var month = date.getMonth()
    var year = date.getFullYear()
    var min = date.getMinutes()
    var sec = date.getSeconds()

    var str = ""

    str += "Today is: "+ day + "." + month + "." + year + " - " + hour + "." + min + ":" + sec
    document.getElementById("date-time").innerHTML = str
}
setInterval(currentDate, 1000);
