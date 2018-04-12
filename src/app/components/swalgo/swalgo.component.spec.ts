import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SwalgoComponent} from './swalgo.component';
import {Component} from '@angular/core';
import {SharingService} from '../../services/sharing.service';



@Component({selector: 'app-sw-form', template: ''})
class SwFormStubComponent {
}

@Component({selector: 'app-sw-grid', template: ''})
class SwGridStubComponent {
}

describe('SwalgoComponent', () => {
  let component: SwalgoComponent;
  let fixture: ComponentFixture<SwalgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwalgoComponent,
        SwFormStubComponent,
        SwGridStubComponent
      ],
      providers: [SharingService]
    });
    fixture = TestBed.createComponent(SwalgoComponent);
    component = fixture.componentInstance;
    const sharingService = TestBed.get(SharingService);
    fixture.detectChanges();
  }));

  it('should create swalgo component', () => {
    expect(component).toBeTruthy();
  });
});
