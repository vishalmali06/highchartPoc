import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { HighchartsService } from './highcharts.service';
import { HighchartsChartComponent } from 'highcharts-angular';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ChartModule ],
  declarations: [ AppComponent, HighchartsChartComponent],
  bootstrap:    [ AppComponent ],
  providers: [HighchartsService]
})
export class AppModule { }
