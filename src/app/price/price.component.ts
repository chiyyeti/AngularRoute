import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public price=[
    {id:1 ,name:"Vivo",price:20000},
    {id:2 ,name:"Appo",price:25000},
    {id:3 ,name:"Samsung",price:21000},
    {id:4 ,name:"Realme",price:150000},
  ]

 
}
