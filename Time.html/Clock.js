function clock(){
    let time=new Date()
    let hh=time.getHours()
    let mm=time.getMinutes()
    let ss=time.getSeconds()
    let ampm
    
    if(hh>12){
        ampm="PM"
    }else{
        ampm="AM"
    }
    
    if(hh>12){
        hh=hh-12
    }
    
    if(hh<10){
        hh="0"+hh
    }
    if(mm<10){
        mm="0"+mm
    }
    if(ss<10){
        ss="0"+ss
    }
    document.getElementById("hours").innerHTML=hh
    document.getElementById("minutes").innerHTML=mm
    document.getElementById("seconds").innerHTML=ss
    document.getElementById("ampm").innerHTML=ampm
    }
    clock()
    setInterval(clock,1000)
    
    