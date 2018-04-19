import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoffeeChartComponent } from './tcoffee-chart.component';

describe('TcoffeeChartComponent', () => {
  let component: TcoffeeChartComponent;
  let fixture: ComponentFixture<TcoffeeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcoffeeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcoffeeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
