import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDetailPageComponent } from './house-detail-page.component';

describe('HouseDetailPageComponent', () => {
  let component: HouseDetailPageComponent;
  let fixture: ComponentFixture<HouseDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
