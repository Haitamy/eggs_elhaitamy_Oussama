import { Personne } from "./modules/objet.js";
import { maison } from "./modules/objet.js";
import { Epicerie } from "./modules/objet.js";

Personne.seDeplacer(maison.nom)
console.log(Personne.nom + " est actuellement à la " + Personne.lieu);
Personne.seDeplacer(Epicerie.nom)
console.log(Personne.nom + " est actuellement à la " + Personne.lieu);
Personne.mainDroite.push(Epicerie.paniers)
console.log(`${Personne.nom} a pris un ${Epicerie.paniers[0].type}`);
console.log(Personne.mainDroite[0][0].contenu);
for (let i = 0; i < Epicerie.ingrédients.length; i++) {
    Personne.mainDroite[0][0].contenu.push(Epicerie.ingrédients[i])
}
console.log(Personne.mainDroite[0][0].contenu);