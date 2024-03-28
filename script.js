function showTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let sessions = "AM";
    if(hr == 0) {
        hr = 12;
    }
    if(hr > 12) {
        hr = hr-12;
        sessions="PM"
    }
    hr =(hr<10)?"0"+hr:hr;
    min =(hr<10)?""+min:min;
    min =(hr<10)?""+min:min;
    sec =(hr<10)?""+sec:sec;

    document.getElementById('digital-clock').innerHTML = hr +":"+min+":"+sec+":"+sessions;
    setTimeout(showTime,1000);
}
showTime()