import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoffeeMenuComponent } from './tcoffee-menu.component';
import {MsaSharingService} from '../../../services/msa-sharing.service';
import {TcoffeeService} from '../../../services/tcoffee.service';

describe('TcoffeeMenuComponent', () => {
  let component: TcoffeeMenuComponent;
  let fixture: ComponentFixture<TcoffeeMenuComponent>;
  let msasharingServiceStub: Partial<MsaSharingService>;
  let tcoffeeServiceStub: Partial<TcoffeeService>;
  beforeEach(async(() => {
    // stub msasharingService for test purposes
    msasharingServiceStub = {};
    // stub TcoffeeService for test purposes
    tcoffeeServiceStub = {};
    TestBed.configureTestingModule({
      declarations: [ TcoffeeMenuComponent ],
      providers: [{provide: MsaSharingService, useValue: msasharingServiceStub},
        {provide: TcoffeeService, useValue: tcoffeeServiceStub}
      ]
    })
    fixture = TestBed.createComponent(TcoffeeMenuComponent);
    component = fixture.componentInstance;
    // msasharingService from the root injector
    const msasharingService = TestBed.get(MsaSharingService);
    // tcoffeeService from the root injector
    const tcoffeeService = TestBed.get(TcoffeeService);
    fixture.detectChanges();
  }));

  it('should create TcoffeeMenu Component', () => {
    expect(component).toBeTruthy();
  });
  it('should have fileChanged function', () => {
    expect(component.fileChanged).toBeTruthy();
  });

  it('should have uploadDocument function', () => {
    expect(component.uploadDocument).toBeTruthy();
  });
});
