import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunkOrTreatCompleteComponent } from './trunk-or-treat-complete.component';

describe('TrunkOrTreatCompleteComponent', () => {
  let component: TrunkOrTreatCompleteComponent;
  let fixture: ComponentFixture<TrunkOrTreatCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrunkOrTreatCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunkOrTreatCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
