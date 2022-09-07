import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentsModule } from '../components.module';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }
  
  @Input('ValueInput') progress: number = 15;
  @Input() btnClass: string = 'btn-primary';

  @Output() valueOutput: EventEmitter<number> = new EventEmitter();

  changeValue( value: number) { 
    this.progress += value;
    this.progress = (this.progress >= 100 && value >=0) ? 100: (this.progress <= 0 && value <=0) ? 0 : this.progress; 
    this.valueOutput.emit(this.progress);
  }
  
  OnChange( newValue: number){
    this.progress = (newValue >=100 ) ? 100 : (newValue <=0) ? 0 : newValue;
    this.valueOutput.emit(this.progress);
  }

}
