import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDecorationPageComponent } from './house-decoration-page.component';

describe('HouseDecorationPageComponent', () => {
  let component: HouseDecorationPageComponent;
  let fixture: ComponentFixture<HouseDecorationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDecorationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDecorationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
