import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

  produits:any=[]
  id:any 

  constructor(private produitService:ProduitService , private router:Router) {}

  ngOnInit(): void {

    this.getAllproduits()
  }

  

  deleteproduit(id:any){
    this.produitService.deleteproduit(id).subscribe(
      (response)=>{console.log("here response deleted from BE ",response);
      this.getAllproduits()
         }
    )

    
  }

  navigate(id:any){
    this.router.navigate(["/add-produit/"+id])
  }

  getAllproduits(){
    this.produitService.getAllproduits().subscribe(
      (response)=>{console.log("here response  from BE ",response);
         this.produits=response}
    );
  }


}
