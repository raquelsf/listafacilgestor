import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-establishments-form',
    templateUrl: './establishments-form.component.html',
    styleUrls: ['./establishments-form.component.css']
})
export class EstablishmentsFormComponent implements OnInit {
    showData = true;
    showAddress = false;
    showSchedule = true;
    idEstablishment: any;

    constructor() {
    }

    ngOnInit() {
    }

    btnAddress(e) {
        console.log(e);
        this.idEstablishment = e;
        this.showData = false;
        this.showSchedule = false;
        this.showAddress = true;
    }

    btnSchedule(e) {
        this.idEstablishment = e;
        this.showData = false;
        this.showAddress = false;
        this.showSchedule = true;
    }
}
