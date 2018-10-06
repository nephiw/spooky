import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDecorationCompleteComponent } from './house-decoration-complete.component';

describe('HouseDecorationCompleteComponent', () => {
  let component: HouseDecorationCompleteComponent;
  let fixture: ComponentFixture<HouseDecorationCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDecorationCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDecorationCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
