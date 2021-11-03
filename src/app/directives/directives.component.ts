import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public toggle: boolean = true;
  public currentStage: number = 1;
  public actions: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

  public toggleToggle(): void {
    this.toggle = !this.toggle;
  }

  public setStage(stage: number) {
    this.currentStage = stage;
  }

}
