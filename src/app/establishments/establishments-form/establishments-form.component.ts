import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishments-form',
  templateUrl: './establishments-form.component.html',
  styleUrls: ['./establishments-form.component.css']
})
export class EstablishmentsFormComponent implements OnInit {
  showData = true;
  showAddress = false;
  showSchedule = false;
  constructor() { }

  ngOnInit() {
  }

}
