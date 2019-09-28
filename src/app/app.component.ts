import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { HighchartsService } from './highcharts.service'
import More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('charts') public chartEl: ElementRef;
  myOptions: any;
  constructor(private highcharts: HighchartsService) {
  }
  ngOnInit() {
    this.myOptions = {
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
          name: 'Circle 1',
          innerSize: 160,
          size: 200,
          data: [
            {
              y: 88.19,
              drilldown: 'circle1'
            },
            ['Completed', 47],
            ['No Responce', 15],
            ['Bonous Back', 23],
            ['Reply To Invitation', 15]
          ],
          showInLegend: true,
          dataLabels: {
            enabled: true
          },
        },
        {
          name: 'Circle 2',
          innerSize: 70,
          size: 110,
          data: [
            {
              y: 88.19,
              drilldown: 'circle2'
            },
            ['Completed', 47],
            ['No Responce', 15],
            ['Bonous Back', 23],
            ['Reply To Invitation', 15]
          ],
          showInLegend: true,
          dataLabels: {
            enabled: true
          },
        }],
      drilldown: {
        series: [
          {
            name: 'Circle 1',
            id: 'circle1',
            innerSize: 160,
            size: 200,
            data: [
              ['Completed', 47],
              ['No Responce', 15],
              ['Bonous Back', 23],
              ['Reply To Invitation', 15]
            ],
            showInLegend: true,
            dataLabels: {
              enabled: true
            },
          },
          {
            name: 'Circle 2',
            id: 'circle2',
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
              enabled: true
            },
          }]
      }
    }
    Highcharts.chart(this.chartEl.nativeElement, this.myOptions)
  }
}