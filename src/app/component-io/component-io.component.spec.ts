import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIoComponent } from './component-io.component';

describe('ComponentIoComponent', () => {
  let component: ComponentIoComponent;
  let fixture: ComponentFixture<ComponentIoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentIoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
