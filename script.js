
clickbtn = document.querySelector(".container");
time_dom = document.querySelector("#time");
interval = setInterval(()=>clickbtn.click(),100);

clickbtn.addEventListener("click",() => {
    time_obj = new Date();

    time_obj.setHours(time_obj.getHours()+5);
    time_obj.setMinutes(time_obj.getMinutes()+30);

    time_dom.innerHTML = time_obj.getUTCHours()>12?time_obj.getUTCHours()-12:time_obj.getUTCHours()==0?12:time_obj.getUTCHours;
    time_dom.innerHTML += " : " + time_obj.getUTCMinutes()
    + " : " + time_obj.getUTCSeconds()
    + " : " + getmillisecond();
    function getmillisecond(){
        return time_obj.getUTCMilliseconds() == 0 ? "0" : parseInt(time_obj.getUTCMilliseconds()/100);
    }

})