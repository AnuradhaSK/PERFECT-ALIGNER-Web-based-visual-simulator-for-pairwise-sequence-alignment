import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialignComponent } from './dialign.component';
import {Component} from '@angular/core';
import {MsaSharingService} from '../../services/msa-sharing.service';
@Component({selector: 'app-dialign-menu', template: ''})
class DialignMenuStubComponent {}

@Component({selector: 'app-dialign-panel', template: ''})
class DialignPanelStubComponent {}

@Component({selector: 'app-dialign-chart', template: ''})
class DialignChartStubComponent {}

describe('DialignComponent', () => {
  let component: DialignComponent;
  let fixture: ComponentFixture<DialignComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialignComponent,
        DialignMenuStubComponent,
        DialignPanelStubComponent,
        DialignChartStubComponent
      ],
      providers: [ MsaSharingService]
    })
    fixture = TestBed.createComponent(DialignComponent);
    component = fixture.componentInstance;
    const msasharingService = TestBed.get(MsaSharingService);
    fixture.detectChanges();
  }));


  it('should create dialign component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in h2 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('DIALIGN');
  });
});
