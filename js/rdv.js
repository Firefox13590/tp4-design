const 
datepickerJours = document.querySelector("#jours"),
timepicker = document.querySelector("#timepicker");
console.log(datepickerJours, timepicker);

for(i = 1; i < 32; i++){
    let nouvSpan = document.createElement("span");
    nouvSpan.classList.add("datepicker-item");
    nouvSpan.innerHTML = i;
    datepickerJours.append(nouvSpan);
}

for(i = 8; i < 16; i++){
    let nouvSpan = document.createElement("span");
    nouvSpan.classList.add("timepicker-item");
    nouvSpan.innerHTML = `${i}h-${i + 1}h`;
    timepicker.append(nouvSpan);
}
