import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunkOrTreatFormComponent } from './trunk-or-treat-form.component';

describe('TrunkOrTreatFormComponent', () => {
  let component: TrunkOrTreatFormComponent;
  let fixture: ComponentFixture<TrunkOrTreatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrunkOrTreatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunkOrTreatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
