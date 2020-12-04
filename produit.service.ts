import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model'

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Produit[];
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

}
