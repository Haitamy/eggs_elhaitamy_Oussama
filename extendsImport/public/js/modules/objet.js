export let Personne ={
    nom : 'Oussama',
    lieu :'lieu',
    argent : 50,
    mainDroite : [],
    mainGauche : [],
    seDeplacer(lieu){
        this.lieu = lieu
    },
    payerArticle(article){
        this.argent-=article.prix
    },
    couper(ingredient, outil){
        ingredient=outil
    }
}

export let maison ={
    nom : 'maison',
    personnes : []
}

export let outil = {
    nom : 'couteau',
    action : 'coupé'
}

export let Epicerie = {
    nom : 'epicerie',
    personnes : [],
    paniers : [{ type: "panier", contenu: [] }],
    ingrédients : ['oignon','oeuf','epice','fromage','beurre']
}

export let poele ={
    contenu : [],
    cuir(){
        setTimeout(()=> {
            this.contenu[0].etat='cuit'
        }, 4000)
    }
}

export let bol ={
    contenu : [],
    melanger(nomMelange){
        let newMelange = {
            nom : nomMelange,
            etat : 'pas cuit'
        }
        this.contenu = [newMelange]
    }
}
