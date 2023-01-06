import { Personne } from "./objet.js";

export function goingTo(endroit) {
  Personne.seDeplacer(endroit.nom);
  console.log(Personne.nom + " est actuellement à la " + Personne.lieu);
}

export function courses(prendreIngredient) {
    for (let i = 0; i < prendreIngredient.length; i++) {
        Personne.mainDroite[0][0].contenu.push(prendre[i]);
        console.log(
          `Vous avez mis ${Personne.mainDroite[0][0].contenu[i]} dans le panier`
        );
      }
}
