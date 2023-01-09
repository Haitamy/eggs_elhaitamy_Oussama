import { Personne,Epicerie, maison, bol, outil, poele } from "./modules/objet.js";
import { goingTo, courses,payerCourses,mettreDansBol,rendrePanier, leave, mettreDansPoele} from "./modules/fuctions.js";

//aller maison
goingTo(maison)
//partir de la maison
leave(maison)
//aller epicerie
goingTo(Epicerie)
//prendre panier en main droite
Personne.mainDroite.push(Epicerie.paniers);
//mettre articles dans le panier avec la main gauche
courses(Epicerie.ingrédients)
//Payer les courses
payerCourses(Personne.mainDroite[0][0].contenu)
//partir de l'épicerie'
leave(Epicerie)
//aller à la maison
goingTo(maison)
//mettre ingredients dans bol et enlever du panier
mettreDansBol(Personne.mainDroite[0][0].contenu)
//partir de la maison
leave(maison)
//aller à l'épicerie
goingTo(Epicerie)
//rendre le panier
rendrePanier()
//partir de l'épicerie'
leave(Epicerie)
//retourner à la maison
goingTo(maison)
//coupe les ingredients etat entier
Personne.couper(bol.contenu,outil)
//mélanger ingrédients
let omlette = 'omlette'
bol.melanger(omlette)
//mettre mélange dans la poele
mettreDansPoele()
//cuir l'omlette
poele.cuir()

