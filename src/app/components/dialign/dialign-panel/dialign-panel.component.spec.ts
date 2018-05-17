import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DialignPanelComponent} from './dialign-panel.component';
import {MsaSharingService} from '../../../services/msa-sharing.service';
import {SCHEMES} from '../../../models/colorscheme';

// mock sharing service
export class MsaSharingMock {
  visibility = true;
  schemeName = 'ClustalW';
  geneArray = [{id: 'seq1', sequence: 'ACCBVFF'}];

  public getVisibility(): any {
    return this.visibility;
  }

  getScheme() {
    return this.schemeName;
  }

  getPanelData() {
    return this.geneArray;
  }

}

describe('DialignPanelComponent', () => {
  let component: DialignPanelComponent;
  let fixture: ComponentFixture<DialignPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [DialignPanelComponent, SCHEMES],
      providers: [{provide: MsaSharingService, useClass: MsaSharingMock}]
    });
    fixture = TestBed.createComponent(DialignPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  /*it('should create dialign-pannel', () => {
    expect(component).toBeTruthy();
  });*/
});
