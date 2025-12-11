// fonction qui gere l'ouverture/fermeture du menuBurger
let menuBurger = document.querySelector(".menuBurger");

// ecouter si l'utilisateur clique sur le menu
menuBurger.addEventListener("click", OuvrirFermerMenu);

/** la fonction elle même */
function OuvrirFermerMenu() {
  // déclaration des variables nécessaires
  let barre2 = document.querySelector(".barre2")
  let barre3 = document.querySelector(".barre3")
  let liensMenus = document.querySelectorAll("header nav a")
  let boutonX = document.querySelector("header nav .boutonX")
  let backgroundMenuBurger = document.querySelector("header nav .menuBurger .background")
  // si le menu n'est pas ouvert, on active les styles du menu actif
  if (!barre3.classList.contains("actif")) {
    barre2.classList.add("actif")
    barre3.classList.add("actif")
    boutonX.style.top = "10px"
    backgroundMenuBurger.classList.add("actif")
    document.querySelector("main").style.filter = "saturate(90%) brightness(50%) blur(5px)"
    document.querySelector("header .menuToggle").style.filter = " saturate(90%) brightness(50%) blur(5px)"
    document.querySelector("header nav h1").style.filter = "blur(5px)"
    for (const lien of liensMenus) {
      lien.classList.add("actif") 
    }
  }
  // sinon, on remet les choses comme elles étaient avant
  else {
    barre2.classList.remove("actif")
    barre3.classList.remove("actif")
    boutonX.style.top = 0
    backgroundMenuBurger.classList.remove("actif")
        document.querySelector("main").style.filter = "brightness(100%)"
    document.querySelector("header .menuToggle").style.filter = "brightness(100%)"
    document.querySelector("header nav h1").style.filter = ""
    for (const lien of liensMenus) {
      lien.classList.remove("actif") 
    }
  }
}

// fonction qui gere le menu toggle

let menuToggle = document.querySelectorAll("header .menuToggle .toggle")
let artistesTattoo = document.querySelector("section.tattoo")
let artistesPiercing = document.querySelector("section.piercing")
let artistesVide = document.querySelector("section.vide")
let tattooActif = true
let piercingActif = true


for (const toggle of menuToggle) {
  toggle.addEventListener("click", changerMenuToggle)
}

/**
 * 
 * @param {Event} evt
 */
function changerMenuToggle(evt) {
    if (evt.target.classList.contains("toggleTattoo") && tattooActif) {
      console.log("desactivé")
      document.querySelector(".toggleTattoo .backgroundToggle").style.fill = "#584149"
      tattooActif = false
      artistesTattoo.style.display = "none"
      evt.target.style.zIndex = "0"
    } else if (evt.target.classList.contains("toggleTattoo") && !tattooActif) {
      console.log("activé")
      document.querySelector(".toggleTattoo .backgroundToggle").style.fill = "#3D2D33" 
      tattooActif = true
      artistesTattoo.style.display = "block"
      evt.target.style.zIndex = "1"

    }
    
    else if (evt.target.classList.contains("togglePiercing") && piercingActif) {
      console.log("desactivé")
      document.querySelector(".togglePiercing .backgroundToggle").style.fill = "#584149"
      piercingActif = false
      artistesPiercing.style.display = "none"
      evt.target.style.zIndex = "0"
    } else if (evt.target.classList.contains("togglePiercing") && !piercingActif) {
      console.log("activé")
      document.querySelector(".togglePiercing .backgroundToggle").style.fill = "#3D2D33"
      piercingActif = true
      artistesPiercing.style.display = "block"
      evt.target.style.zIndex = "1"
    }

    if (!tattooActif && !piercingActif) {
      artistesVide.style.display = "flex"
      document.querySelector(".transition").style.display = "none"
    } else {
      document.querySelector(".transition").style.display = "unset"

    }
}