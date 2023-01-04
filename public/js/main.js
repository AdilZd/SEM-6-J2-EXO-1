
let vieille_dame = {
    age: 99,
    nom: {
        prenom: 'Laponie',
        nomDeFamille: 'Cath'
    },
    moral: 'mal',
    objet: 'canne',
    parler(){
        if (this.moral === 'mal') {
            alert('Vous me dérangez et "le frappe avec une ' + this.objet + ' !"');
        } else {
            alert('Bonjour, je suis ' + this.nom.prenom + ' ' + this.nom.nomDeFamille + '.');
        }
    }
}

let vieil_homme = {
    nom: 'Jet',
    adoucir () {
        vieille_dame.moral = 'bien';
    }
}

vieille_dame.parler();
vieille_dame.adoucir(vieille_dame);
vieille_dame.parler();