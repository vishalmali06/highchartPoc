import * as Highcharts from 'highcharts';
import { Injectable } from '@angular/core';

@Injectable()
export class HighchartsService {
    constructor() {
    }
    
    createChart(el, cfg) {
      debugger;
      Highcharts.chart(el, cfg);
    }
}