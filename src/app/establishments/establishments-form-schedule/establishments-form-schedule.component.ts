import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-establishments-form-schedule',
  templateUrl: './establishments-form-schedule.component.html',
  styleUrls: ['./establishments-form-schedule.component.css']
})
export class EstablishmentsFormScheduleComponent implements OnInit {
  @Input() idEstablishment: any;

  constructor() { }

  ngOnInit() {
  }

}
