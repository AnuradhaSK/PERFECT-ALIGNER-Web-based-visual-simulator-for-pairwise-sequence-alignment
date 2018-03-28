import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwGridComponent } from './sw-grid.component';

describe('SwGridComponent', () => {
  let component: SwGridComponent;
  let fixture: ComponentFixture<SwGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
