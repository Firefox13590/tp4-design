/* 
            VARIABLES
*/
const 
datepickerJours = document.querySelector("#jours"),
timepicker = document.querySelector("#timepicker"),
btnsNavigationForm = document.querySelectorAll("button"),
sectionsForm = document.querySelectorAll("fieldset"),
barreProgression = document.querySelector("div#barre-progression > div"),
choixJours = document.querySelectorAll("#jours .datepicker-item"),
choixHeures = document.querySelectorAll(".timepicker-item");
console.log(datepickerJours);
console.log(timepicker);
console.log(btnsNavigationForm);
console.log(sectionsForm);
console.log(barreProgression);
console.log(choixJours);
console.log(choixHeures);

let
progressionForm = 0;



/* 
            FONCTIONS
 */
/**
 * Met à jour l'affichage du formulaire en fonction de la progression
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

    barreProgression.style.width = `${progressionForm * (25)}%`;
}

/**
 * Navigue dans le formulaire
 * 
 * @param {Number} variation 
 */
function navigateForm(variation){
    // console.log(variation);
    progressionForm += variation;
    // console.log(progressionForm);
    updateFormDisplay();
}

/**
 * Gère la sélection d'un choix dans le formulaire (jour ou heure)
 * 
 * @param {HTMLElement} parent Conteneur parent des choix
 * @param {HTMLElement} elem Élément cliqué
 */
function selectChoice(parent, elem){
    for(const child of parent.children){
        child.classList.remove("selected");
    }
    elem.classList.add("selected");
}



/* 
            EXECUTION
*/
// ajout dynamique jours du mois + heures disponibles
for(i = 1; i < 32; i++){
    let nouvSpan = document.createElement("span");
    nouvSpan.classList.add("datepicker-item");
    nouvSpan.innerHTML = i;
    nouvSpan.addEventListener("click", () =>{
        selectChoice(datepickerJours, nouvSpan);
    });
    datepickerJours.append(nouvSpan);
}
for(i = 8; i < 16; i++){
    let nouvSpan = document.createElement("span");
    nouvSpan.classList.add("timepicker-item");
    nouvSpan.innerHTML = `${i}h-${i + 1}h`;
    nouvSpan.addEventListener("click", () =>{
        selectChoice(timepicker, nouvSpan);
    });
    timepicker.append(nouvSpan);
}



updateFormDisplay();
