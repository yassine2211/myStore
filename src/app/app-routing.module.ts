import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListProduitsComponent } from './components/list-produits/list-produits.component';
import { ListCategorieComponent } from './components/list-categorie/list-categorie.component';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { AddCategorieComponent } from './components/add-categorie/add-categorie.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"list-produit",component:ListProduitsComponent},
  {path:"list-categorie",component:ListCategorieComponent},
  {path:"add-produit/:id",component:AddProduitComponent},
  {path:"add-categorie/:id",component:AddCategorieComponent},
  {path:"add-produit",component:AddProduitComponent},
  {path:"add-categorie",component:AddCategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
