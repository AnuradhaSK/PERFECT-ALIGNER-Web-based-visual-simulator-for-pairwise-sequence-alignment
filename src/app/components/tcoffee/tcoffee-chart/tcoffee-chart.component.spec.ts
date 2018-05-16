import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoffeeChartComponent } from './tcoffee-chart.component';
import {MsaSharingService} from '../../../services/msa-sharing.service';
import {ChartsModule} from 'ng2-charts';
import {FormsModule} from '@angular/forms';

// mock sharing service
export class MsaSharingMock {
  chartDataArray = ['5', '10', '8', '4'];
  idArray = ['seq1', 'seq2', 'seq3', 'seq4'];
  visible = true;

  public getVisibility(): any {
    return this.visible;
  }

  getIdArray() {
    return this.idArray;
  }

  getChartData() {
    return this.chartDataArray;
  }

}

describe('TcoffeeChartComponent', () => {
  let component: TcoffeeChartComponent;
  let fixture: ComponentFixture<TcoffeeChartComponent>;

  beforeEach(async(() => {

    let originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    TestBed.configureTestingModule({
      imports: [FormsModule, ChartsModule],
      declarations: [ TcoffeeChartComponent ],
      providers: [{provide: MsaSharingService, useClass: MsaSharingMock}]
    })
    fixture = TestBed.createComponent(TcoffeeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create t-coffee chart component', () => {
    expect(component).toBeTruthy();
  });
  it('should run chartClicked method', () => {
    const temp = fixture.debugElement.injector.get(TcoffeeChartComponent);
    expect(temp.chartClicked).toBeTruthy();
  });

  it('should run chartHovered method', () => {
    const temp = fixture.debugElement.injector.get(TcoffeeChartComponent);
    expect(temp.chartHovered).toBeTruthy();
  });


});
