import { Personne } from "./modules/objet.js";
import { maison } from "./modules/objet.js";

Personne.seDeplacer(maison.nom)
console.log(Personne.nom + " est actuellement à la " + Personne.lieu);