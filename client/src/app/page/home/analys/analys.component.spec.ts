import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysComponent } from './analys.component';

describe('AnalysComponent', () => {
  let component: AnalysComponent;
  let fixture: ComponentFixture<AnalysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
