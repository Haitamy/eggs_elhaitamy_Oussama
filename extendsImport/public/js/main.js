import { Personne } from "./modules/objet.js";
import { maison } from "./modules/objet.js";
import { Epicerie } from "./modules/objet.js";
import { Ingrédients } from "./modules/class.js";

Personne.seDeplacer(maison.nom)
console.log(Personne.nom + " est actuellement à la " + Personne.lieu);
Personne.seDeplacer(Epicerie.nom)
console.log(Personne.nom + " est actuellement à la " + Personne.lieu);
Personne.mainDroite.push(Epicerie.paniers.type)
console.log(`${Personne.nom} a pris un ${Epicerie.paniers.type}`);