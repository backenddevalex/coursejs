"use strict";


function myClock() {
  
    var siteTime = new Date();
    var hour = siteTime.getHours();
    var minute = siteTime.getMinutes();
    var second = siteTime.getSeconds();
        if (hour < 10) hour = "0" + hour;
        if (minute < 10) minute  = "0" + minute;
        if (second < 10) second  = "0" + second;
      setInterval(myClock, 1000);
  document.getElementById("siteTime").textContent = hour + ":" + minute + ":" + second;
  
};