
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
   moduleId: module.id,
   selector: 'popularity',
   templateUrl: 'popularity.component.html',
   styleUrls: ['popularity.component.css']
})

export class PopularityComponent implements OnChanges {
   starWidth:number;
   @Input() rating:number;
   @Output() popularityClicked:EventEmitter<number>;
   
   constructor() {
      this.popularityClicked = new EventEmitter<number>();
   }
   
   ngOnChanges():void {
      this.starWidth = 84 * this.rating / 100;
   }
   
   onClick():void {
      this.popularityClicked.emit(this.rating);
   }
}
