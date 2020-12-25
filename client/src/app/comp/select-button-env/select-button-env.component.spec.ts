import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectButtonEnvComponent } from './select-button-env.component';

describe('SelectButtonEnvComponent', () => {
  let component: SelectButtonEnvComponent;
  let fixture: ComponentFixture<SelectButtonEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectButtonEnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectButtonEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
