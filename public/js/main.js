class Lieu {
    constructor(nom) {
        this.nom = nom;
        this.contenu = [];
    }
}
let maison = new Lieu("maison");

class Epicerie extends Lieu {
    constructor(nom) {
        super(nom);
        this.ingredients = [];
    }
}
let epicerie = new Epicerie("epicerie");

class Cuisine extends Lieu {
    constructor(nom) {
        super(nom);
        this.ingredients = [];
    }
}
let cuisine = new Cuisine("cuisine");


class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

let poivron = new Ingredient('poivron', 'entier', 1);
let oignon = new Ingredient('oignon', 'entier', 2);
let oeuf = new Ingredient('oeuf', 'entier', 4);
let epice = new Ingredient('epice', 'moulu', 3.25);
let paprika = new Ingredient('paprika', 'moulu', 1.5);
let fromage = new Ingredient('fromage', 'coupé', 1.6);

let personnage = {
    nom: "Maxime",
    lieu: "néant",
    argent: 100,
    panier: [],
    se_deplacer(x) {},
    payer(x) {},
    couper(x, y) {}
}

let personnage2 = new personnage();