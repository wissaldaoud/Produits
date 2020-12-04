@@ import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
 @@ import { AddProduitComponent } from './add-produit/add-produit.component';
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
