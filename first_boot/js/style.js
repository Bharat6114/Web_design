 var date = new Date()
 date=date.toDateString()
 var  time= new Date()
 time = time.toTimeString()
document.getElementById("date").innerHTML=date;
document.getElementById("time").innerHTML=time;