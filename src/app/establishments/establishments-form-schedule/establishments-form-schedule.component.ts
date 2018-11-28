import {Component, Input, OnInit} from '@angular/core';
import {Establishment} from '../establishments';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {EstablishmentService} from '../establishments.service';
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-establishments-form-schedule',
    templateUrl: './establishments-form-schedule.component.html',
    styleUrls: ['./establishments-form-schedule.component.css']
})
export class EstablishmentsFormScheduleComponent implements OnInit {
    @Input() idEstablishment: any;
    form: FormGroup;

    constructor(private _route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private EstablishmentService: EstablishmentService,
                private router: Router
    ) {
        this.EstablishmentService = EstablishmentService;
        this.form = this.getFormSchedule();
    }

    public mask = [/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/];
    public itens = [];
    ngOnInit() {
        this.itens = [
            {'dia': 1, label: 'Domingo', aberto: 0, fechado: 0,  id_estabelecimento: this.idEstablishment},
            {'dia': 2, label: 'Segunda Feira', aberto: 0, fechado: 0, id_estabelecimento: this.idEstablishment},
            {'dia': 3, label: 'Terça Feira', aberto: 0, fechado: 0, id_estabelecimento: this.idEstablishment},
            {'dia': 4, label: 'Quarta Feira', aberto: 0, fechado: 0, id_estabelecimento: this.idEstablishment},
            {'dia': 5, label: 'Quinta Feira', aberto: 0, fechado: 0, id_estabelecimento: this.idEstablishment},
            {'dia': 6, label: 'Sexta Feira', aberto: 0, fechado: 0, id_estabelecimento: this.idEstablishment},
            {'dia': 7, label: 'Sabádo', aberto: 0, fechado: 0, id_estabelecimento: this.idEstablishment},
        ];

        this._route.paramMap.subscribe(parameterMap => {
            const id = +parameterMap.get('id');

            if (id > 0) {
                this.idEstablishment = id;
                this.getSchedule(id);
            }
        });
    }

    public onSubmit(data) {
        this.EstablishmentService.saveEstablishmentSchedule(data, this.idEstablishment)
            .then(res => {
                if (res.json().status == 'true') {
                    Swal({
                        title: 'Pronto!',
                        text: 'Estabelecimento cadastrado com sucesso.',
                        type: 'success'
                    });
                    this.router.navigate(['establishments']);
                } else {
                    Swal({
                        title: 'Ops!',
                        text: 'Ocorreu um erro inesperado.',
                        type: 'error'
                    });
                }
            });
    }

    getFormSchedule() {
        return this.formBuilder.group({
            1: this.formBuilder.group({
                label: ['Domingo'],
                dia: ['1'],
                aberto: [''],
                fechado: [''],
                id_estabelecimento: [this.idEstablishment],
            }),
            2: this.formBuilder.group({
                label: ['Segunda feira'],
                dia: ['2'],
                aberto: [''],
                fechado: [''],
                id_estabelecimento: [this.idEstablishment],

            }),
            3: this.formBuilder.group({
                label: ['Terça feira'],
                dia: ['3'],
                aberto: [''],
                fechado: [''],
                id_estabelecimento: [this.idEstablishment],

            }),
            4: this.formBuilder.group({
                label: ['Quarta feira'],
                dia: ['4'],
                aberto: [''],
                fechado: [''],
                id_estabelecimento: [this.idEstablishment],

            }),
            5: this.formBuilder.group({
                label: ['Quinta feira'],
                dia: ['5'],
                aberto: [''],
                fechado: [''],
                id_estabelecimento: [this.idEstablishment],

            }),
            6: this.formBuilder.group({
                label: ['Sexta feira'],
                dia: ['6'],
                aberto: [''],
                fechado: [''],
                id_estabelecimento: [this.idEstablishment],

            }),
            7: this.formBuilder.group({
                label: ['Sabádo'],
                dia: ['7'],
                aberto: [''],
                fechado: [''],
                id_estabelecimento: [this.idEstablishment],

            }),
        });
    }

    getSchedule(id) {
        console.log(id);
        this.EstablishmentService.showSchedule(id)
            .subscribe(
                data => {
                    this.itens = data.data;
                    console.log(this.itens);
                    data.data.forEach(
                        item => {
                            this.form.get(item.dia + '.label').setValue(item.label);
                            this.form.get(item.dia + '.dia').setValue(item.dia);
                            this.form.get(item.dia + '.aberto').setValue(item.aberto);
                            this.form.get(item.dia + '.fechado').setValue(item.fechado);
                            this.form.get(item.dia + '.id_estabelecimento').setValue(item.id_estabelecimento);
                        });
                });
    }
}
