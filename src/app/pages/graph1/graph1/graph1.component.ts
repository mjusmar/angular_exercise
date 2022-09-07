import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public label1: String[] = ['Download Sales1', 'In-Store Sales1', 'Mail-Order Sales1' ];
  public data1 = [ 10, 90, 40 ];
  public label2: String[] = ['Download Sales2', 'In-Store Sales2', 'Mail-Order Sales2' ];
  public data2 = [ 10, 90, 40 ];
  public label3: String[] = ['Download Sales3', 'In-Store Sales3', 'Mail-Order Sales3' ];
  public data3 = [ 10, 90, 40 ];
  public label4: String[] = ['Download Sales4', 'In-Store Sales4', 'Mail-Order Sales4', 'Test4' ];
  public data4 = [ 10, 90, 40, 10 ];
}
