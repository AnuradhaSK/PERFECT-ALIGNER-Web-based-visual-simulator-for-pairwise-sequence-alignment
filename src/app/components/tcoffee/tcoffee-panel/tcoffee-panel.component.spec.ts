import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TcoffeePanelComponent} from './tcoffee-panel.component';
import {SCHEMES} from '../../../models/colorscheme';
import {MsaSharingService} from '../../../services/msa-sharing.service';

// mock sharing service
export class MsaSharingMock {
  visibility = true;
  schemeName = 'ClustalW';
  public getVisibility(): any {
    return this.visibility;
  }
  getScheme() {
    return this.schemeName;
  }
}


describe('TcoffeePanelComponent', () => {
  let component: TcoffeePanelComponent;
  let fixture: ComponentFixture<TcoffeePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [TcoffeePanelComponent,SCHEMES],
      providers: [{provide: MsaSharingService, useClass: MsaSharingMock}]
    });
    fixture = TestBed.createComponent(TcoffeePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should create t-coffee pannel', () => {
    expect(component).toBeTruthy();
  });*/
});
