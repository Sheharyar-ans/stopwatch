


// var count = 0;
// var interval;
// function timer(){
//     count++
//     document.write(count);
// }
// interval = setInterval(timer,1000)

// setTimeout(function(){
//     clearInterval(interval)
// },5000)


var hrs = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hrsheading = document.getElementById("hrs")
var minheading = document.getElementById("min")
var secheading = document.getElementById("sec")
var msecheading = document.getElementById("msec")
var interval;

function timer(){
    msec++
    msecheading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secheading.innerHTML = sec
        msec = 0
    }else if(sec >= 60){
        min++
        minheading.innerHTML = min
        sec = 0
    }else if(min >= 60){
        hrs++
        hrsheading.innerHTML = hrs
        min = 0
    }
}


function start(){
    interval = setInterval(timer,10)
}

function stop(){
    clearInterval(interval)
}
function reset(){
    msec = 0
    sec = 0 
    min = 0
    hrs = 0
    hrsheading.innerHTML = hrs
    minheading.innerHTML = min
    secheading.innerHTML = sec
    msecheading.innerHTML = msec
    stop()
}