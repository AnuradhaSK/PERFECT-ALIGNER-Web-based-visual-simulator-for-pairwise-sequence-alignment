import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DialignChartComponent} from './dialign-chart.component';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {MsaSharingService} from '../../../services/msa-sharing.service';

// mock sharing service
export class MsaSharingMock {
  chartDataArray = ['5', '10', '8', '4'];
  idArray = ['seq1', 'seq2', 'seq3', 'seq4'];
  visible = true;

  public getVisibility(): any {
    return this.visible;
  }

  getIdArray(): any {
    return this.idArray;
  }

  getChartData(): any {
    return this.chartDataArray;
  }


}

describe('DialignChartComponent', () => {
  let component: DialignChartComponent;
  let fixture: ComponentFixture<DialignChartComponent>;

  beforeEach(async(() => {

    let originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    TestBed.configureTestingModule({
      imports: [FormsModule, ChartsModule],
      declarations: [DialignChartComponent],
      providers: [{provide: MsaSharingService, useClass: MsaSharingMock}]
    });
    fixture = TestBed.createComponent(DialignChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create dialign-chart component', () => {
    expect(component).toBeTruthy();
  });

  it('should run chartClicked method', () => {
    const temp = fixture.debugElement.injector.get(DialignChartComponent);
    expect(temp.chartClicked).toBeTruthy();
  });

  it('should run chartHovered method', () => {
    const temp = fixture.debugElement.injector.get(DialignChartComponent);
    expect(temp.chartHovered).toBeTruthy();
  });

});
