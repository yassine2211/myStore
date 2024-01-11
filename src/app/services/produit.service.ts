import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produitUrl = "http://localhost:8081/api/produits"
  constructor(private http: HttpClient) { }

  addproduit(produit: FormData,id:any) {
    return this.http.post<{ data: any }>(this.produitUrl + "/" +id, produit)
  }

  getAllproduits() {
    return this.http.get<{ data: any }>(this.produitUrl)
  }

  getproduitById(id: any) {
    return this.http.get<{ data: any }>(`${this.produitUrl}/${id}`)
  }

  getproduitByName(name: any) {
    return this.http.get<{ data: any }>(`${this.produitUrl}/produit/${name}`)
  }

  deleteproduit(id: any) {
    return this.http.delete<{ data: any }>(`${this.produitUrl}/${id}`)
  }

  updateproduit(produit: FormData,id:any) {
    return this.http.put<{ data: any }>(`${this.produitUrl}/${id}`,produit)
  }
}
