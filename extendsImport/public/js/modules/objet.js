import { beurre, oeuf, epice, fromage, oignon } from "./instances.js";

export let Personne = {
  nom: "Oussama",
  lieu: "lieu",
  argent: 50,
  mainDroite: [],
  mainGauche: [],
  seDeplacer(lieu) {
    this.lieu = lieu;
  },
  payerArticle(article) {
    this.argent -= article.prix;
  },
  couper(ingredient, outil) {
    for (let i = 0; i < ingredient.length; i++) {
      if (ingredient[i].etat == "entier") {
        ingredient[i].etat = outil.action;
        console.log(`${ingredient[i].nom} a été coupé`);
      }
    }
  },
};

export let maison = {
  nom: "maison",
  personnes: [],
};

export let outil = {
  nom: "couteau",
  action: "coupé",
};

export let Epicerie = {
  nom: "epicerie",
  personnes: [],
  paniers: [{ type: "panier", contenu: [] }],
  ingrédients: [oignon, oeuf, epice, fromage, beurre],
};

export let poele = {
  contenu: [],
  cuir() {
    setTimeout(() => {
      this.contenu[0].etat = "cuit";
      console.log(`${this.contenu[0].nom} est ${this.contenu[0].etat}, bon appétit`);
    }, 4000);
  },
};
 let newMelange
export let bol = {
  contenu: [],
  melanger(nomMelange) {
    newMelange = {
      nom: nomMelange,
      etat : "pas cuit",
    };
    this.contenu=[newMelange]
    console.log(`Le nouveau mélange ${nomMelange} contient : ${this.contenu[0].nom}`)
  },
};
