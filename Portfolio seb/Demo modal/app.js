var replaceableTexts = [
  "Nous couplons votre système de vidéosurveillance existant à vos caisses enregistreuses. Plus besoin de jongler entre deux systèmes indépendants. Filtrez votre vidéo en fonction des mots clés métier. Cherchez par article, réduction, annulation... et regardez la vidéo correspondante en quelques secondes seulement",
  "Nous utilisons l'analyse vidéo dans tous vos points de vente. Recevez des notifications sur l'état de vos magasins depuis tous lieux et à tout moment. Plus besoin de vous déplacer sur chaque magasin. Passez moins de temps sur la route, économisez de l'argent et concentrez-vous sur le service au client.",
  "Nous digitalisons votre espace de vente grâce à la domotique. Automatisez des tâches manuelles comme l'extinction des lumières, clim, musique... pour éviter toute surconsommation d'énergie. Soyez notifié en temps réel lorsqu’un événement à risque survient et évitez de pertes de marchandise."
];

/*function replaceTexts(element, index) {
  var paragraphe = document.getElementById(element);
  var text = paragraphe.innerText;

  if (verifyClassName(paragraphe.classList, "active") === true) {
    paragraphe.innerHTML = text.replace(replaceableTexts[index], "...");
    paragraphe.classList.remove("active");
  } else {
    paragraphe.innerHTML = text.replace("...", replaceableTexts[index]);
    paragraphe.classList.add("active");
  }
}*/

function replaceTexts(element, fleche, index) {
  var paragraphe = document.getElementById(element);
  var chevron = document.getElementById(fleche);
  var text = paragraphe.innerText;

  if (verifyClassName(paragraphe.classList, "active") !== true) {
    paragraphe.innerHTML = replaceableTexts[index];
    paragraphe.classList.add("active");
    chevron.classList.remove("fa-angle-down");
    chevron.classList.add("fa-angle-up");
  } else {
    paragraphe.innerHTML = "";
    paragraphe.classList.remove("active");
    chevron.classList.add("fa-angle-down");
    chevron.classList.remove("fa-angle-up");
  }
}

function verifyClassName(classList, className) {
  for (var i = 0; i < classList.length; i++) {
    if (classList[i] === className) return true;
  }
  return false;
}

/*for (var i = 1; i < 2; i++) {
  $("#btn-" + i).click(function() {
    replaceTexts("paragraphe-" + i, "fleche-" + i, i - 1);
  });
}
*/

$("#btn-1").click(function() {
  replaceTexts("paragraphe-1", "fleche-1", 0);
});

$("#btn-2").click(function() {
  replaceTexts("paragraphe-2", "fleche-2", 1);
});

$("#btn-3").click(function() {
  replaceTexts("paragraphe-3", "fleche-3", 2);
});
