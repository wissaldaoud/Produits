import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model'

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Produit[];
  // produit: Produit();
  constructor() {
    this.produits = [
      { idProduit: 1, nomProduit: "pc", prixProduit: 1200, dateCreation: new Date('12/05/2020') },
      { idProduit: 2, nomProduit: "Imprimante", prixProduit: 450, dateCreation: new Date('12/01/2020') },
      { idProduit: 3, nomProduit: "ecran", prixProduit: 200, dateCreation: new Date('02/08/2020') },
    ];
  }

  listeProduits(): Produit[] {
    return this.produits;
  }

  ajouteProduit(produit: Produit) {
    this.produits.push(produit);
  }
  supprimerProduit(prod: Produit) {
    const index = this.produits.indexOf(prod, 0);
    console.log(index);

    if (index > -1) {
      this.produits.splice(index, 1);
    }
  }
  consulterProduit(id: number): Produit {
    this.produit = this.produits.find(p => p.idProduit == id);
    return this.produit;
  }
  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit > n2.idProduit) {
        return 1;
      }
      if (n1.idProduit < n2.idProduit) {
        return -1;
      }
      return 0;
    });
  }
  updateProduit(p: Produit) {
    // console.log(p);
    this.supprimerProduit(p);
    this.ajouteProduit(p);
    this.trierProduits();
  }

}
