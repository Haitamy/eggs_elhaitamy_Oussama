import { Personne,Epicerie, maison } from "./modules/objet.js";
import { goingTo, courses,payerCourses,mettreDansBol,rendrePanier } from "./modules/fuctions.js";

//aller maison
goingTo(maison)
//aller epicerie
goingTo(Epicerie)
//prendre panier en main droite
Personne.mainDroite.push(Epicerie.paniers);
//mettre articles dans le panier avec la main gauche
courses(Epicerie.ingrédients)
//Payer les courses
payerCourses(Personne.mainDroite[0][0].contenu)
//aller à la maison
goingTo(maison)
//mettre ingredients dans bol et enlever du panier
mettreDansBol(Personne.mainDroite[0][0].contenu)
//aller à l'épicerie
goingTo(Epicerie)
//rendre le panier
rendrePanier(Personne.mainDroite)
//retourner à la maison
goingTo(maison)

