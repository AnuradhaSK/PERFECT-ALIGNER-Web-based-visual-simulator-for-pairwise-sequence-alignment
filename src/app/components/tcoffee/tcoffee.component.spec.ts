import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoffeeComponent } from './tcoffee.component';
import {MsaSharingService} from '../../services/msa-sharing.service';
import {Component} from '@angular/core';
@Component({selector: 'app-tcoffee-menu', template: ''})
class TcoffeeMenuStubComponent {}

@Component({selector: 'app-tcoffee-panel', template: ''})
class TcoffeePanelStubComponent {}

@Component({selector: 'app-tcoffee-chart', template: ''})
class TcoffeeChartStubComponent {}

describe('TcoffeeComponent', () => {
  let component: TcoffeeComponent;
  let fixture: ComponentFixture<TcoffeeComponent>;
  // let msasharingServiceStub: Partial<MsaSharingService>;
  beforeEach(async(() => {
    // stub SharingService for test purposes
    // msasharingServiceStub = {};
    TestBed.configureTestingModule({
      declarations: [ TcoffeeComponent,
        TcoffeeMenuStubComponent,
        TcoffeePanelStubComponent,
        TcoffeeChartStubComponent
      ],
      providers: [ MsaSharingService]
      // providers: [{provide: MsaSharingService, useValue: msasharingServiceStub}]
    })
    fixture = TestBed.createComponent(TcoffeeComponent);
    component = fixture.componentInstance;
    // msasharingService from the root injector
    const msasharingService = TestBed.get(MsaSharingService);
    fixture.detectChanges();
  }));

  it('should create tcoffee component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in h2 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('T-COFFEE');
  });
});
