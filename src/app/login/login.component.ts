import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      console.log(this.ActivatedRoute);
      
    // console.log(this.ActivatedRoute.snapshot.data['data']);
    
  }

}
