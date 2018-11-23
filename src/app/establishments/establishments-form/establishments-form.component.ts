import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EstablishmentService} from '../establishments.service';
import {Establishment} from '../establishments';

@Component({
    selector: 'app-establishments-form',
    templateUrl: './establishments-form.component.html',
    styleUrls: ['./establishments-form.component.css']
})
export class EstablishmentsFormComponent implements OnInit {
    showData = true;
    showAddress = false;
    showSchedule = false;
    idEstablishment: any;
    public Establishment = new Establishment();

    constructor(private _route: ActivatedRoute,
                private EstablishmentService: EstablishmentService,) {
    }

    ngOnInit() {
        this._route.paramMap.subscribe(parameterMap => {
            const id = +parameterMap.get('id');
            if (id > 0) {

                this.getEstablishment(id);
                this.showData = true;
                this.showSchedule = true;
                this.showAddress = true;
            }
        });
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

    getEstablishment(id) {
        this.EstablishmentService.showEstablishment(id)
            .subscribe(
                data => {
                    this.idEstablishment = data.data.id;
                    console.log(this.idEstablishment);
                });
    }
}
