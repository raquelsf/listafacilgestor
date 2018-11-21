import {Component, Input, OnInit} from '@angular/core';
import {Establishment} from '../establishments';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {EstablishmentService} from '../establishments.service';

@Component({
  selector: 'app-establishments-form-schedule',
  templateUrl: './establishments-form-schedule.component.html',
  styleUrls: ['./establishments-form-schedule.component.css']
})
export class EstablishmentsFormScheduleComponent implements OnInit {
  @Input() idEstablishment: any;
  form : FormGroup;
  constructor(private formBuilder: FormBuilder, private EstablishmentService: EstablishmentService) {
      this.EstablishmentService = EstablishmentService;
      this.form = this.getFormSchedule();
  }
  public mask = [/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/];
  public itens = [];

  ngOnInit() {
      this.itens = [
          {'dia': 1, label: 'Domingo', aberto: 0, fechado: 0},
          {'dia': 2, label: 'Segunda Feira', aberto: 0, fechado: 0},
          {'dia': 3, label: 'Terça Feira', aberto: 0, fechado: 0},
          {'dia': 4, label: 'Quarta Feira', aberto: 0, fechado: 0},
          {'dia': 5, label: 'Quinta Feira', aberto: 0, fechado: 0},
          {'dia': 6, label: 'Sexta Feira', aberto: 0, fechado: 0},
          {'dia': 7, label: 'Sabádo', aberto: 0, fechado: 0},
      ];

  }

    public onSubmit(data) {
       console.log(data);
        const usersJson: any[] = JSON.parse(data);
        console.log(usersJson);

      
    }

    getFormSchedule() {
        return this.formBuilder.group({
            1: this.formBuilder.group({
                dia: [''],
                aberto: [''],
                fechado: [''],
                id_estabelecimento : this.idEstablishment,
            }),
            2: this.formBuilder.group({
                dia: [''],
                aberto: [''],
                fechado: [''],
                id_estabelecimento : this.idEstablishment,

            }),
            3: this.formBuilder.group({
                dia: [''],
                aberto: [''],
                fechado: [''],
                id_estabelecimento : this.idEstablishment,

            }),
            4: this.formBuilder.group({
                dia: [''],
                aberto: [''],
                fechado: [''],
                id_estabelecimento : this.idEstablishment,

            }),
            5: this.formBuilder.group({
                dia: [''],
                aberto: [''],
                fechado: [''],
                id_estabelecimento : this.idEstablishment,

            }),
            6: this.formBuilder.group({
                dia: [''],
                aberto: [''],
                fechado: [''],
                id_estabelecimento : this.idEstablishment,

            }),
            7: this.formBuilder.group({
                dia: [''],
                aberto: [''],
                fechado: [''],
                id_estabelecimento : this.idEstablishment,

            }),
        });
    }
}
