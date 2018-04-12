import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DialignMenuComponent} from './dialign-menu.component';
import {MsaSharingService} from '../../../services/msa-sharing.service';
import {DialignService} from '../../../services/dialign.service';


describe('DialignMenuComponent', () => {
  let component: DialignMenuComponent;
  let fixture: ComponentFixture<DialignMenuComponent>;
  let msasharingServiceStub: Partial<MsaSharingService>;
  let dialignServiceStub: Partial<DialignService>;
  beforeEach(async(() => {
    // stub msasharingService for test purposes
    msasharingServiceStub = {};
    // stub DialignService for test purposes
    dialignServiceStub = {};
    TestBed.configureTestingModule({
      declarations: [DialignMenuComponent],
      providers: [{provide: MsaSharingService, useValue: msasharingServiceStub},
        {provide: DialignService, useValue: dialignServiceStub}
      ]
    });
    fixture = TestBed.createComponent(DialignMenuComponent);
    component = fixture.componentInstance;
    // msasharingService from the root injector
    const msasharingService = TestBed.get(MsaSharingService);
    // dialignService from the root injector
    const dialignService = TestBed.get(DialignService);
    fixture.detectChanges();
  }));

  it('should create DialignMenu Component', () => {
    expect(component).toBeTruthy();
  });
});
