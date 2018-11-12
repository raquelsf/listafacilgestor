import { Component, OnInit } from '@angular/core';
import { UserService }   from './user.service';
import { User }   from './user';
import Swal from 'sweetalert2'

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    providers:  [ UserService ]
})


export class UserComponent implements OnInit{
    public User : User = new User();
    public token : any;
    constructor(private UserService: UserService) {
        this.UserService = UserService;
    }
    ngOnInit(){
        this.token = localStorage.getItem('token');
        console.log(this.token);
    }
    public onSubmit(user: User){
        this.UserService.login(user).then();
    }
    
}
