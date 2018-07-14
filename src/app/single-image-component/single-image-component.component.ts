import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-image-component',
  templateUrl: './single-image-component.component.html',
  styleUrls: ['./single-image-component.component.css']
})
export class SingleImageComponentComponent {
  @Input() imageURL: string;

  constructor() { }

}
