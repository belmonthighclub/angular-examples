import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IoChildComponent } from './io-child.component';

describe('IoChildComponent', () => {
  let component: IoChildComponent;
  let fixture: ComponentFixture<IoChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IoChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
