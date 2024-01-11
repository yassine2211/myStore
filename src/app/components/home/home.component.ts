import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produits:any=[]
  id:any 
  term:any

  name: any;



  constructor(private produitService: ProduitService, private router:Router,  private activatedRoute: ActivatedRoute,  private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    
    this.name = this.activatedRoute.snapshot.paramMap.get("name");
    if (this.name) {
      this.getproduitByName();
    }else{
      this.getAllproduits();
    }

  }

  

  deleteproduit(id:any){
    this.produitService.deleteproduit(id).subscribe(
      (response)=>{console.log("here response deleted from BE ",response);
      this.getAllproduits()
         }
    )

    
  }

  navigate(id:any){
    this.router.navigate(["/reserver-produit/"+id])
  }

  getAllproduits(){
    this.produitService.getAllproduits().subscribe(
      (response)=>{console.log("here response  from BE ",response);
         this.produits=response}
    );
  }


  getproduitByName() {
    this.produitService.getproduitByName(this.name).subscribe(
      (response) => {
        console.log("here destination by id", response);
        this.produits = response;
      }
    );
  }

  getSafeImage(image: string | null): SafeUrl | null {
    if (image) {
      // Si vous avez une chaîne base64, créez une URL sécurisée
      const imageUrl = 'data:image/png;base64,' + image;
      return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    }
    return null;
  }

  chercher(nom:any){
    this.produitService.getproduitByName(nom).subscribe(
      (response)=>{console.log("here response  from BE ",response);
         this.produits=response}
    );
  }

}
