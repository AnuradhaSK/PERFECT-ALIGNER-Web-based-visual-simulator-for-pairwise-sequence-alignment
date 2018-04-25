import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialignChartComponent } from './dialign-chart.component';

describe('DialignChartComponent', () => {
  let component: DialignChartComponent;
  let fixture: ComponentFixture<DialignChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialignChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialignChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
