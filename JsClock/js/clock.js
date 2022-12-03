let yourName = prompt("İsminizi bahşeder misiniz?");

let nameElement = document.querySelector("#myName");
nameElement.innerHTML= `${yourName}`;


const date = new Date();
let day = date.getDay();

var weekdays = new Array(7);
        weekdays[0] = "Pazar";
        weekdays[1] = "Pazartes";
        weekdays[2] = "Salı";
        weekdays[3] = "Çarşamba";
        weekdays[4] = "Perşembe";
        weekdays[5] = "Cuma";
        weekdays[6] = "Cumartesi";
var r = weekdays[day];

let dateTime = document.getElementById('myClock');

function showTime() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  dateTime.innerHTML = 
    ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2)
    + " "+r;
}

setInterval(showTime, 1000);
