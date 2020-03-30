"use strict";

let time_button = 'no-clicked';
let timeout_var;

function dateToString(date) {
    const str_date = date.toString();
    const arr_date = str_date.split(' ');
    return arr_date[4]; //The time
}

function showTheTime() {
    const currnet_time = dateToString(Date());
    document.getElementById('time-paragraph').innerHTML = currnet_time;
    document.getElementById('time-paragraph').style.display = "block";

    time_button = 'clicked';
    timeout_var = setTimeout(showTheTime, 500);
}

function displayTime() {
    if (time_button != 'clicked'){
        showTheTime();
    }
    else{
        document.getElementById('time-paragraph').style.display = "none";
        time_button = 'no-clicked';
        clearTimeout(timeout_var);
    }
}