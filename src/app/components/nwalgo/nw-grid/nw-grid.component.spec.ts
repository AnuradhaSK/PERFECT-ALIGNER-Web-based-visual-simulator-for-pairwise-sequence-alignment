import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '../../../material.module';
import {FormsModule} from '@angular/forms';
import {NwGridComponent} from './nw-grid.component';
import {SharingService} from '../../../services/sharing.service';
import {SharingMock} from '../../../../mock';
import {Cell} from '../../../models/cell';

describe('NwGridComponent', () => {
  let component: NwGridComponent;
  let fixture: ComponentFixture<NwGridComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [MaterialModule,
        FormsModule],
      declarations: [NwGridComponent,Cell],
      providers: [{provide: SharingService, useClass: SharingMock}
      ]
    });
    fixture = TestBed.createComponent(NwGridComponent);
    component = fixture.componentInstance;
    // sharingService from the root injector
    const sharingService = TestBed.get(SharingService);
    fixture.detectChanges();
  }));


  it('should create nw-grid', () => {
    expect(component).toBeTruthy();
  });
});
