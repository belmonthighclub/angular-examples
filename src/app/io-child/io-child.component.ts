import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-io-child',
  templateUrl: './io-child.component.html',
  styleUrls: ['./io-child.component.css']
})
export class IoChildComponent implements OnInit {
  // Set it to false, 0, "", [], {} or null depending on the type
  @Input() public someInput: string = "";
  // VSCode may import the wrong emitter. Make sure it's from @angular/core !!
  @Output() public emitter: EventEmitter<string> = new EventEmitter<string>();

  public outValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // This function is called when the parent component changes an input
  ngOnChanges(changes: SimpleChanges) {
    // in the [] put the name of the property
    this.someInput = changes["someInput"].currentValue;
  }

  public sendOutput(): void {
    this.emitter.emit(this.outValue);
  }

}
