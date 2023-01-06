import { Personne } from "./objet.js";

export function goingTo(endroit) {
  Personne.seDeplacer(endroit.nom);
  console.log(Personne.nom + " est actuellement à la " + Personne.lieu);
}

export function courses(prendreIngredient) {
  for (let i = 0; i < prendreIngredient.length; i++) {
    Personne.mainDroite[0][0].contenu.push(prendreIngredient[i]);
    console.log(
      `Vous avez mis ${Personne.mainDroite[0][0].contenu[i]} dans le panier`
    );
  }
}

export function payerCourses(contenuPanier) {
  for (let i = 0; i < contenuPanier.length; i++) {
    switch (contenuPanier[i]) {
      case "oignon":
        Personne.payerArticle(oignon);
        console.log(
          `Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i]}`
        );
        break;
      case "oeuf":
        Personne.payerArticle(oeuf);
        console.log(
          `Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i]}`
        );
        break;
      case "beurre":
        Personne.payerArticle(beurre);
        console.log(
          `Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i]}`
        );
        break;
      case "epice":
        Personne.payerArticle(epice);
        console.log(
          `Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i]}`
        );
        break;
      case "fromage":
        Personne.payerArticle(fromage);
        console.log(
          `Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i]}`
        );
        break;
    }
  }
}
