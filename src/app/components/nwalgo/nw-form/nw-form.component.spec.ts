import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NwFormComponent} from './nw-form.component';
import {SharingService} from '../../../services/sharing.service';
import {NwalgoService} from '../../../services/nwalgo.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {By} from '@angular/platform-browser';

describe('NwFormComponent', () => {
  let component: NwFormComponent;
  let fixture: ComponentFixture<NwFormComponent>;
  let sharingServiceStub: Partial<SharingService>;
  let nwalgoServiceStub: Partial<NwalgoService>;
  beforeEach(async(() => {
    // stub SharingService for test purposes
    sharingServiceStub = {};
    // stub NwAlgoService for test purposes
    nwalgoServiceStub = {};
    TestBed.configureTestingModule({
      imports: [FormsModule,
        HttpClientTestingModule],
      declarations: [NwFormComponent],
      providers: [{provide: SharingService, useValue: sharingServiceStub},
        {provide: NwalgoService, useValue: nwalgoServiceStub}
      ]
    });
    fixture = TestBed.createComponent(NwFormComponent);
    component = fixture.componentInstance;
    // sharingService from the root injector
    const sharingService = TestBed.get(SharingService);
    // nwalgoService from the root injector
    const nwalgoService = TestBed.get(NwalgoService);
    fixture.detectChanges();
  }));

  it('should create NwForm component', () => {
    expect(component).toBeTruthy();
  });
  it('should have showGrid function', () => {
    expect(component.showGrid).toBeTruthy();
  });
  it('should render form name in h4 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Input for alignment');
  });

});
