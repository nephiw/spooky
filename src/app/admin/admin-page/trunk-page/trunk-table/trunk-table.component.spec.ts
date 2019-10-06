import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunkTableComponent } from './trunk-table.component';

describe('TrunkTableComponent', () => {
  let component: TrunkTableComponent;
  let fixture: ComponentFixture<TrunkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrunkTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
