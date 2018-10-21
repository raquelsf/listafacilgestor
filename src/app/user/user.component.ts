import { Component, OnInit } from '@angular/core';
import { UserService }   from './user.service';
import Swal from 'sweetalert2'


export interface User {
    username: string;
    password: string;
}

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    providers:  [ UserService ]
})


export class UserComponent implements OnInit{
    constructor(private UserService: UserService) {
        this.UserService = UserService;
    }
    ngOnInit(){
        
    }
    public onSubmit(user: User){
        this.UserService.login(user).then();
        
    }
    
}
