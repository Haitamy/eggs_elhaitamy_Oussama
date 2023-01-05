export let Personne ={
    nom : 'Oussama',
    lieu :'maison',
    argent : 50000,
    mainDroite : [],
    mainGauche : [],
    seDeplacer(lieu){

    },
    payerArticle(article){

    },
    couper(ingredient, outil){

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

export let epicerie = {
    nom : 'epicerie',
    personnes : [],
    panier : [{ type: "panier", contenu: [] }],
    ingrédients : ['oignon','oeuf','epice','fromage','salami']
}

export let poele ={
    contenu : [],
    cuir(){
        setTimeout(()=> {
            this.contenu[0].etat='cuit'
        }, 4000)
    }
}