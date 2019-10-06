import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunkPageComponent } from './trunk-page.component';

describe('TrunkPageComponent', () => {
  let component: TrunkPageComponent;
  let fixture: ComponentFixture<TrunkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrunkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
