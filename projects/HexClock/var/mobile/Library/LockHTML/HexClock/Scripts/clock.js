function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function changeHex() {
  var d = new Date();
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  var hex = h + "" + m + "" + s;
  document.body.style.backgroundColor = "#" + hex;
  document.getElementById("time").innerHTML = "#" + hex;
}

changeHex();
 
setInterval(function() {
  changeHex();
}, 1000);