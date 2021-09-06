import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../Category.model';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'books', 'actions'];
  public categorys: CategoryModel[] = [];
  constructor(
    private service: CategoryService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    return this.service.findAll().subscribe(res => {
      console.log(res)
      this.categorys = res;
    });
  }

}
