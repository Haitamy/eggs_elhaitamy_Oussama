
import { oignon,oeuf,fromage,epice,beurre } from "./modules/instances.js";
import { Personne,Epicerie, maison } from "./modules/objet.js";
import { goingTo, courses } from "./modules/fuctions.js";

goingTo(maison)
goingTo(Epicerie)
Personne.mainDroite.push(Epicerie.paniers);
console.log(`${Personne.nom} a pris un ${Epicerie.paniers[0].type}`);

courses(Epicerie.ingrédients)
let contenuPanier = Personne.mainDroite[0][0].contenu
console.log(contenuPanier);
for (let i = 0; i < contenuPanier.length; i++) {
 switch (contenuPanier[i]) {
     case 'oignon':
         Personne.payerArticle(oignon)
         console.log(`Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i]}`);
         break;
     case 'oeuf':
         Personne.payerArticle(oeuf)
         console.log(`Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i]}`);
         break;
     case 'beurre':
         Personne.payerArticle(beurre)
         console.log(`Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i]}`);
         break;
     case 'epice':
         Personne.payerArticle(epice)
         console.log(`Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i]}`);
         break;
     case 'fromage':
         Personne.payerArticle(fromage)
         console.log(`Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i]}`);
         break;
}
}
goingTo(maison)

