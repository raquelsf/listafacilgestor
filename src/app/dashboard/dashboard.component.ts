import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { UserService }   from '../user/user.service';
import {Observable} from "rxjs";
declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    providers:  [ UserService ]
})

export class DashboardComponent implements OnInit{
  public user : boolean;
  dashItens;
    mostrarMenu : Observable<boolean>;
    constructor(private UserService: UserService) {
      this.UserService = UserService;
      this.mostrarMenu = UserService.isLoggedIn();
    }
    ngOnInit(){
        this.UserService.listDash()
            .subscribe(
                data => this.dashItens = data
            );


        var dataSales = {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
          series: [
             [4, 60, 9, 30, 40, 50, 10, 1, 1],
             [20, 10, 3, 7, 22, 20, 7, 8, 1],
             [1, 5, 3, 9, 5, 4, 7, 6, 3],
             [1, 4, 3, 4, 1, 2, 7, 20, 10],
          ]
        };

        var optionsSales = {
          low: 0,
          high: 100,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 4
          }),
          showLine: true,
          showPoint: false,
        };

        var responsiveSales: any[] = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);

    }
}
