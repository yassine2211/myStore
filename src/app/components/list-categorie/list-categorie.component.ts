import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {

  categories:any=[]
  id:any 

  constructor(private categorieService:CategorieService , private router:Router) {}

  ngOnInit(): void {

    this.getAllcategories()
  }

  

  deletecategorie(id:any){
    this.categorieService.deletecategorie(id).subscribe(
      (response)=>{console.log("here response deleted from BE ",response);
      this.getAllcategories()
         }
    )

    
  }

  navigate(id:any){
    this.router.navigate(["/add-categorie/"+id])
  }

  getAllcategories(){
    this.categorieService.getAllcategories().subscribe(
      (response)=>{console.log("here response  from BE ",response);
         this.categories=response}
    );
  }

}
