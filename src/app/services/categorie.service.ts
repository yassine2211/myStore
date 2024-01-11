import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  categorieUrl = "http://localhost:8081/api/categories"
  constructor(private http: HttpClient) { }
 
  addcategorie(categorie: any) {
    return this.http.post<{ data: any }>(this.categorieUrl, categorie)
  }

  getAllcategories() {
    return this.http.get<{ data: any }>(this.categorieUrl)
  }

  getcategorieById(id: any) {
    return this.http.get<{ data: any }>(`${this.categorieUrl}/${id}`)
  }

  getcategorieByName(name: any) {
    return this.http.get<{ data: any }>(`${this.categorieUrl}/categorie/${name}`)
  }

  deletecategorie(id: any) {

    return this.http.delete<{ data: any }>(`${this.categorieUrl}/${id}`)
  }

  updatecategorie(categorie: any) {
    return this.http.put<{ data: any }>(`${this.categorieUrl}`,categorie)
  }
}
