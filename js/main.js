let menuBurger = document.querySelector(".menuBurger");

menuBurger.addEventListener("click", OuvrirFermerMenu);

/**
 * @param {Event} evt
 */
function OuvrirFermerMenu(evt) {
  let cibleClic = evt.target;
  let barre2 = document.querySelector(".barre2")
  let barre3 = document.querySelector(".barre3")
  let liensMenus = document.querySelectorAll("header nav a")
  if (!barre3.classList.contains("actif")) {
    barre2.classList.add("actif")
    barre3.classList.add("actif")
    for (const lien of liensMenus) {
      lien.classList.add("actif") 
    }
  } else {
    barre2.classList.remove("actif")
    barre3.classList.remove("actif")
    for (const lien of liensMenus) {
      lien.classList.remove("actif") 
    }
  }
  
}
