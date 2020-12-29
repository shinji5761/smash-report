import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterplanComponent } from './counterplan.component';

describe('CounterplanComponent', () => {
  let component: CounterplanComponent;
  let fixture: ComponentFixture<CounterplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
