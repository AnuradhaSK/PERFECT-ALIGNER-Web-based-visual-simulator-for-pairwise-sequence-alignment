import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NwalgoComponent} from './nwalgo.component';
import {Component} from '@angular/core';
import {SharingService} from '../../services/sharing.service';


@Component({selector: 'app-nw-form', template: ''})
class NwFormStubComponent {
}

@Component({selector: 'app-nw-grid', template: ''})
class NwGridStubComponent {
}


describe('NwalgoComponent', () => {
  let component: NwalgoComponent;
  let fixture: ComponentFixture<NwalgoComponent>;
  // let sharingServiceStub: Partial<SharingService>;

  beforeEach(async(() => {
    // stub SharingService for test purposes
    /*sharingServiceStub = {
      setVisibility(param) {},
    };*/
    TestBed.configureTestingModule({
      declarations: [NwalgoComponent,
        NwFormStubComponent,
        NwGridStubComponent
      ],
      providers: [ SharingService
      /*providers: [{provide: SharingService, useValue: sharingServiceStub}*/
      ]
    });
    fixture = TestBed.createComponent(NwalgoComponent);
    component = fixture.componentInstance;
    // UserService from the root injector
    const sharingService = TestBed.get(SharingService);
    // sharingServiceStub.setVisibility(false);
    fixture.detectChanges();
  }));


  it('should create nwalgo component', () => {
    expect(component).toBeTruthy();
  });
});
