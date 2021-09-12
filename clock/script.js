setInterval(setTime,1000);
let hourhand=document.querySelector(".hourhand");
let minutehand=document.getElementsByClassName("minutehand")[0];
let secondhand=document.querySelector('.secondhand');



function setTime(){
    currentDate=new Date();
    let seconds=currentDate.getSeconds()/60;
    let minutes=(seconds+currentDate.getMinutes())/60 ;
    let hours=(minutes+ currentDate.getHours())/12;
    
    secondhand.style.transform =`rotate(${seconds*360}deg)`;
    minutehand.style.transform=`rotate(${minutes*360}deg)`;
    hourhand.style.transform=`rotate(${hours*360}deg)`;;
}

setTime();
