import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishments-form',
  templateUrl: './establishments-form.component.html',
  styleUrls: ['./establishments-form.component.css']
})
export class EstablishmentsFormComponent implements OnInit {
  showData = true;
  showAddress = true;
  showSchedule = false;
  constructor() { }

  ngOnInit() {
  }

  showAdress(){
    this.showData = false;
    this.showSchedule = false;
    this.showAddress = true;
  }

}
