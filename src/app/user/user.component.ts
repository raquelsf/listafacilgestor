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
    private User : User = new User();
    constructor(private UserService: UserService) {
        this.UserService = UserService;
    }
    ngOnInit(){
        localStorage.removeItem('token');
    }
    public onSubmit(user: User){
        this.UserService.login(user).then();
    }
    
}
