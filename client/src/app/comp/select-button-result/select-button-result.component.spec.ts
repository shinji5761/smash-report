import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectButtonResultComponent } from './select-button-result.component';

describe('SelectButtonResultComponent', () => {
  let component: SelectButtonResultComponent;
  let fixture: ComponentFixture<SelectButtonResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectButtonResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectButtonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
