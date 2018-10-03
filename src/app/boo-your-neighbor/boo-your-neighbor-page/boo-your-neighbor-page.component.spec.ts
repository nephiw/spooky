import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooYourNeighborPageComponent } from './boo-your-neighbor-page.component';

describe('BooYourNeighborPageComponent', () => {
  let component: BooYourNeighborPageComponent;
  let fixture: ComponentFixture<BooYourNeighborPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooYourNeighborPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooYourNeighborPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
