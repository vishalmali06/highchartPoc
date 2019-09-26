import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HighchartsService } from './highcharts.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('charts') public chartEl: ElementRef;
  constructor(private highcharts: HighchartsService) { }
  ngOnInit() {
    this.highcharts.createChart(this.chartEl.nativeElement, this.myOptions);
  }
  myOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: '<b>22</b>%',
      align: 'center',
      verticalAlign: 'middle',
      y: 5,
      style: {
        fontSize: '30px',
        fontFamily: 'auto'
      }
    },
    series: [
      {
        innerSize: 160,
        size: 200,
        data: [
          ['Completed', 47],
          ['No Responce', 15],
          ['Bonous Back', 23],
          ['Reply To Invitation', 15]
        ]
      }, {
        innerSize: 70,
        size: 110,
        data: [
          ['Completed', 47],
          ['No Responce', 15],
          ['Bonous Back', 23],
          ['Reply To Invitation', 15]
        ],
        showInLegend: true,
        dataLabels: {
          enabled: false
        },
      }]
  }
}