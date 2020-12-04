import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
@@ -14,7 +16,8 @@ import { AddProduitComponent } from './add-produit/add-produit.component';
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
