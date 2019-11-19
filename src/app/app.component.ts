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

  highchart = Highcharts;
  chartOptions = {   
    chart: {
      type: 'pie'
    },credits: {
      enabled: false
    },
    title: {
      text: '<b>22</b>%',
      align: 'center',
      verticalAlign: 'middle',
      y: 0,
      style: {
        fontSize: '25px',
        fontFamily: 'auto'
      }
    },
    plotOptions: {
      pie: {
            showInLegend: true,
            dataLabels: {
              enabled: false
            },
            colors: [
            'rgb(51, 157, 214)',
            'rgb(153, 153, 153)',
            'rgb(113, 113, 113)',
            'rgb(51, 113, 149)'
          ],
          allowPointSelect: true,
          cursor: 'pointer'
      }
    },
    legend: {
      align: 'center',
      itemWidth: 100,
      itemDistance: 0,
    },
    tooltip: {
      useHTML: true,
      backgroundColor: null,
      borderWidth: 0,
      shadow: false,
      hideDelay: 999,
      formatter: function () {
        const perentage = this.percentage.toString().split('.');
        return '<div style="padding: 5px 8px !important; border-radius: 3px !important; color: white !important;background-color:' +
        this.color + '" class="high-chart-tooltip"> ' + perentage[0] + '%<br>' + this.key + '</div>';
      },
      shared: true,
      enabled: true
    },
    series: [
      {
        name: 'Circle 1',
        innerSize: 110,
        size: 140,
        data: [
          ['Completed', 47],
          ['No Responce', 15],
          ['Bounce Back', 23],
          ['Reply To Invitation', 15]
        ]
      },
      {
        name: 'Circle 2',
        innerSize: 60,
        size: 90,
        data: [
          ['Completed', 47],
          ['No Responce', 15],
          ['Bounce Back', 23],
          ['Reply To Invitation', 15]
        ]
      }
    ]
  };
  
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
            ['donut_1', 47],
            ['donut_2', 15],
            ['donut_3', 23],
            ['donut_4', 15]
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
            ['donut_1', 47],
            ['donut_2', 15],
            ['donut_3', 23],
            ['donut_4', 15]
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
              ['donut_1', 47],
              ['donut_2', 15],
              ['donut_3', 23],
              ['donut_4', 15]
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
              ['donut_1', 47],
              ['donut_2', 15],
              ['donut_3', 23],
              ['donut_4', 15]
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