import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunkOrTreatPageComponent } from './trunk-or-treat-page.component';

describe('TrunkOrTreatPageComponent', () => {
  let component: TrunkOrTreatPageComponent;
  let fixture: ComponentFixture<TrunkOrTreatPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrunkOrTreatPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunkOrTreatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
