import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionInputComponent } from './fraction-input.component';

describe('FractionInputComponent', () => {
  let component: FractionInputComponent;
  let fixture: ComponentFixture<FractionInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FractionInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FractionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
