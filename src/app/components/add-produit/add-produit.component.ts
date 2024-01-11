import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  addproduitForm !: FormGroup
  user: any = {}
  test = true
  produit: any = {}
  id: any
  title: string = "ADD produit"
  categories: any = [];
  idcategorie: any

  constructor(private produitService:ProduitService , private catService:CategorieService , private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
      this.addproduitForm=this.fb.group({
       nom:['',[Validators.required]],
       categorie:['',[Validators.required]],
       prix:['',[Validators.required]],
     }); 

    this.catService.getAllcategories().subscribe(
      (response) => {
        this.categories = response;
          this.idcategorie = this.categories[0].id;
      }
    );
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id) {
      this.title = "Edit produit"
      this.getproduitById();
    }
  }

 

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.produit.image = file;
  }

  add() {
    const formData = new FormData();
    formData.append('nom', this.produit.name);
    formData.append('prix', this.produit.prix);
 
    if (this.produit.image) {
      formData.append('img', this.produit.image, this.produit.image.name);
    }

    if (this.id) {
      // Edit categorie
      formData.append('id', this.id);
      this.produitService.updateproduit(formData,this.idcategorie).subscribe(
        (response) => {
          console.log("here response updated from BE", response);
        }
      );
    } else {
      console.log("here result produit", this.produit)
      console.log("here result image", this.produit.image)

      // Add categorie

      this.produitService.addproduit(formData,this.idcategorie).subscribe(
        (response) => {
           console.log("here response from BE", response);
        }
      );
    }
     this.router.navigate(["/list-produit"]);
  }


  getproduitById(){
    this.produitService.getproduitById(this.id).subscribe(
      (response)=>{console.log("here produit by id",response);
    this.produit=response
    }
    )
  }


  selectcategorie(evt: any){
    console.log("here event ID", evt.target.value);
      this.idcategorie = evt.target.value;
  }

}
