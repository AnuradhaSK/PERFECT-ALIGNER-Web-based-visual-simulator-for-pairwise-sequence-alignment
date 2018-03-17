import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NwGridComponent } from './nw-grid.component';

describe('NwGridComponent', () => {
  let component: NwGridComponent;
  let fixture: ComponentFixture<NwGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NwGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NwGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});