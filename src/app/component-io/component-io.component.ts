import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-io',
  templateUrl: './component-io.component.html',
  styleUrls: ['./component-io.component.css']
})
export class ComponentIoComponent implements OnInit {

  public inputValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public processEmit(event: string) {
    alert("Emitted Message: " + event);
  }

}
