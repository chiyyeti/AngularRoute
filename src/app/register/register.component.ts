import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user :{id:string , name:string}

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user =  {

      id : this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name'],
    };
  }

}
