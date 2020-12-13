import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title=''
  description=''
  price=0
  company='Apple'

  products=[
    {title:'Product1',description:'desc1',price:23000,company:'Xiaomi'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onAdd()
  {
    this.products.push({
      title:this.title,
      description:this.description,
      price:this.price,
      company:this.company
    })
    this.onCancel()
  }

  onCancel(){
    this.title=''
    this.description=''
    this.price=0
    this.company=''
  }
  onDelete(i){
    this.products.splice(i,1)
  }
}
