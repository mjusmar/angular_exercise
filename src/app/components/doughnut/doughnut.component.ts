import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {   
    this.doughnutChartData.labels =  this.doughnutChartLabels;
    this.doughnutChartData.datasets[0].data = this.data;
  }

  @Input() title: string = 'nada'
  @Input() data = [ 10, 20, 30 ];

  // Doughnut
  @Input('labels') doughnutChartLabels: String[] = ['Label1', 'Label2', 'Label3' ];
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data:  [ 10, 20, 30 ],
        backgroundColor: ["#AE2BB1", "#6CC4C4", "#6CC47A"]      
      },
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';

}
