import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
    Promotions = [
        id => 1 ,
        estabelecimento => 'Bills Lanches'
    ];
  constructor() { }

  ngOnInit() {
  }

}
