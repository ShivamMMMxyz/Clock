let  hour =document.getElementById("hour")
let  minute =document.getElementById("minute")
let  second =document.getElementById("second")

function displayTime(){
    let date = new Date();

    let h =date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();  

let hRotates  =   30*h + m/2 +  s/120;
let mRotates = 6*m + s/10 ;
let sRotates = s*6

hour.style.transform = `rotate(${hRotates}deg)`
minute.style.transform = `rotate(${mRotates}deg)`
second.style.transform = `rotate(${sRotates}deg)`


}

setInterval(displayTime,1000)

// ***  hour hand ** 

// 12 hours = 360 deg
// 1 hr == 30 deg
// h hr = 30*h

// 1hr = 60min
// 1min = 30/60 =1/2
// m min = 1/2*m
// h hr = 30*h + m* 1/2

// 1 hr = 3600 sec  =30 deg
// 1 s = 3600/30 deg=1/120
// s s =s/120
// h hr = 30*h + m/2  + s/120


// similarly minute hand 

//  m min = 6*m + s/10 degree 
// s sec = s*6 deg 