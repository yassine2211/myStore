import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  addcategorieForm !: FormGroup
  user: any = {}

  test=true

  categorie: any = {}
  id:any
  title:string="ADD categorie"
  destinations: any=[];
  idDestination :any

  constructor(private categorieService:CategorieService , private activatedRoute:ActivatedRoute ,private router:Router , private fb:FormBuilder) { }


  ngOnInit(): void {
    this.addcategorieForm=this.fb.group({
      name:['',[Validators.required]],
    });

    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id){
      this.title="Edit categorie"
      this.getcategorieById();
  }
  
}

add(){

  if (this.id){
    //Edit categorie
    this.categorieService.updatecategorie(this.categorie).subscribe(
      (response:any)=>{console.log("here response updated from BE",response); }
    );
  }else{
    //Addcategorie
    //this.categorie.DESTINATION_ID=this.idDestination;
    this.categorieService.addcategorie(this.categorie).subscribe(
      (response:any)=>{console.log("here response from BE",response)}
    );
  }
  this.router.navigate(["/list-categorie"])
  
}


getcategorieById(){
  this.categorieService.getcategorieById(this.id).subscribe(
    (response)=>{console.log("here categorie by id",response);
  this.categorie=response
  }

  )
}
}
