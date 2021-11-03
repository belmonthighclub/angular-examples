import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {

  public heading: string = "A heading";
  public smallHeading: string = "subheading";
  public text: string = "Lorem ipsum";
  public time: string;

  public buttonDisable: boolean = false;

  constructor() { 
    this.time = this.getTimeString();
  }

  ngOnInit(): void {
  }

  public changeText(): void {
    this.heading = "Heading 2";
    this.smallHeading = "hello world";
    this.text = "muspi meroL";
  }

  public updateTime(): void {
    this.time = this.getTimeString();
  }

  private getTimeString(): string {
    let date = new Date();
    return date.getTime().toString();
  }

  public toggleButtons(): void {
    this.buttonDisable = !this.buttonDisable;
  }

}
