import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDecorationFormComponent } from './house-decoration-form.component';

describe('HouseDecorationFormComponent', () => {
  let component: HouseDecorationFormComponent;
  let fixture: ComponentFixture<HouseDecorationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDecorationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDecorationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
