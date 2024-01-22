var countDownDate= new Date("Feb 01, 2024 00:00:00").getTime();

var x=setInterval(function(){
    var currentDate= new Date().getTime();
    var difference= countDownDate-currentDate;
    

    var days=Math.floor(difference/(1000*60*60*24));
    var hours=Math.floor((difference%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((difference%(1000*60*60))/(1000*60));
    var seconds=Math.floor((difference%(1000*60))/(1000 ));

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
    
    if(difference<0){
        clearInterval(x);
        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";
        
    }
},1000);