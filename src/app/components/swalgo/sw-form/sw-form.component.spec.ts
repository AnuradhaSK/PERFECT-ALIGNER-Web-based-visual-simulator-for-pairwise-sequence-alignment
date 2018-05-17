import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SwFormComponent} from './sw-form.component';
import {SharingService} from '../../../services/sharing.service';
import {SwalgoService} from '../../../services/swalgo.service';


describe('SwFormComponent', () => {
  let component: SwFormComponent;
  let fixture: ComponentFixture<SwFormComponent>;
  let sharingServiceStub: Partial<SharingService>;
  let swalgoServiceStub: Partial<SwalgoService>;
  beforeEach(async(() => {
    // stub SharingService for test purposes
    sharingServiceStub = {};
    // stub SwAlgoService for test purposes
    swalgoServiceStub = {};
    TestBed.configureTestingModule({
      imports: [FormsModule,
        HttpClientTestingModule],
      declarations: [SwFormComponent],
      providers: [{provide: SharingService, useValue: sharingServiceStub},
        {provide: SwalgoService, useValue: swalgoServiceStub}
      ]
    });
    fixture = TestBed.createComponent(SwFormComponent);
    component = fixture.componentInstance;
    // sharingService from the root injector
    const sharingService = TestBed.get(SharingService);
    // swalgoService from the root injector
    const swalgoService = TestBed.get(SwalgoService);
    fixture.detectChanges();
  }));


  it('should create SwForm Component', () => {
    expect(component).toBeTruthy();
  });
  it('should have showGrid function', () => {
    //let temp=fixture.debugElement.injector.get(SwFormComponent);
    //expect(temp.showGrid()).toBeTruthy();
    expect(component.showGrid).toBeTruthy();
  });
  it('should render form name in h4 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Input for alignment');
  });

});
