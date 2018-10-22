import { Component } from '@angular/core';
import { UserService }   from './user/user.service';
import {Observable} from "rxjs";

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [ UserService ]

})
export class AppComponent{
  mostrarMenu : Observable<boolean>;
  constructor(private UserService: UserService) {
    this.UserService = UserService;
    this.mostrarMenu = UserService.isLoggedIn();
  }
  
  ngOnInit(){
    console.log(this.mostrarMenu);
  }
}
