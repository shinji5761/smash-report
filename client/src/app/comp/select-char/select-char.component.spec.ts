import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCharComponent } from './select-char.component';

describe('SelectCharComponent', () => {
  let component: SelectCharComponent;
  let fixture: ComponentFixture<SelectCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
