import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from './Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = environment.baseUrl
  constructor(private http:HttpClient) { }

  findAll():Observable<CategoryModel[]>{
    const url = `${this.baseUrl}categorys`
    return this.http.get<CategoryModel[]>(url);
  }
}
