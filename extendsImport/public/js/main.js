import { Personne } from "./modules/objet.js";
import { maison } from "./modules/objet.js";
import { Epicerie } from "./modules/objet.js";
import { Ingrédients } from "./modules/class.js";
import { oignon } from "./modules/instances.js";
import { oeuf } from "./modules/instances.js";
import { fromage } from "./modules/instances.js";
import { epice } from "./modules/instances.js";
import { beurre } from "./modules/instances.js";

Personne.seDeplacer(maison.nom);
console.log(Personne.nom + " est actuellement à la " + Personne.lieu);
Personne.seDeplacer(Epicerie.nom);
console.log(Personne.nom + " est actuellement à la " + Personne.lieu);
Personne.mainDroite.push(Epicerie.paniers);
console.log(`${Personne.nom} a pris un ${Epicerie.paniers[0].type}`);
console.log(Personne.mainDroite[0][0].contenu);
for (let i = 0; i < Epicerie.ingrédients.length; i++) {
  Personne.mainDroite[0][0].contenu.push(Epicerie.ingrédients[i]);
  console.log(
    `Vous avez mis ${Personne.mainDroite[0][0].contenu[i]} dans le panier`
  );
}
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
