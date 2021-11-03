import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {

  public obj = { property1: "Prop 1", property2: "Prop 2" };

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    alert("Property 1: " + this.obj.property1 + "\nProperty 2: " + this.obj.property2);
  }

  public resetProps(): void {
    this.obj.property1 = "Prop 1";
    this.obj.property2 = "Prop 2";
  }
}
