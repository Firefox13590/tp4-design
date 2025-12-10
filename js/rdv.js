/* 
            VARIABLES
*/
const 
datepickerJours = document.querySelector("#jours"),
timepicker = document.querySelector("#timepicker"),
// /** @type {NodeListOf<HTMLButtonElement>} */
// btnsNavigationForm = document.querySelectorAll("#navigation-form button"),
btnsNavigationForm = document.querySelectorAll("button"),
sectionsForm = document.querySelectorAll("fieldset"),
barreProgression = document.querySelector("div#barre-progression > div");
console.log(datepickerJours, timepicker, btnsNavigationForm, sectionsForm, barreProgression);

let
progressionForm = 0;



/* 
            FONCTIONS
 */
function updateFormDisplay(){
    sectionsForm.forEach((elem, index) => {
        if(index != progressionForm){
            elem.classList.add("none");
        }else{
            elem.classList.remove("none");
        }
    });

    if(progressionForm == 0){
        btnsNavigationForm[0].disabled = true;
    }else if(progressionForm == 4){
        btnsNavigationForm[1].disabled = true;
    }else{
        btnsNavigationForm.forEach(elem => elem.disabled = false);
    }

    barreProgression.style.width = `${progressionForm * 25}%`;
}

/**
 * 
 * @param {Number} variation 
 */
function navigateForm(variation){
    // console.log(variation);
    progressionForm += variation;
    // console.log(progressionForm);
    updateFormDisplay();
}



/* 
            EXECUTION
*/
// ajout dynamique jours du mois + heures disponibles
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

// event click sur les btns
// btnsNavigationForm.forEach((elem, index) => {
//     elem.addEventListener("click", navigateForm(index * 2 - 1));
// });




updateFormDisplay();
