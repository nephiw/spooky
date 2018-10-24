import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseVotePageComponent } from './house-vote-page.component';

describe('HouseVotePageComponent', () => {
  let component: HouseVotePageComponent;
  let fixture: ComponentFixture<HouseVotePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseVotePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseVotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
