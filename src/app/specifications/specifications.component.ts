import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.css']
})
export class SpecificationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  specs=[
    {Model:"Vivo",Camera:"48 + 2 + 8"},
    {Model:"Appo",Camera:"64 + 8"},
    {Model:"RealMe",Camera:"54 + 2 + 8"},
  ]

}
