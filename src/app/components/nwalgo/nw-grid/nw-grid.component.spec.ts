import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '../../../material.module';
import {FormsModule} from '@angular/forms';
import {NwGridComponent} from './nw-grid.component';
import {SharingService} from '../../../services/sharing.service';

describe('NwGridComponent', () => {
  let component: NwGridComponent;
  let fixture: ComponentFixture<NwGridComponent>;
  // let sharingServiceStub: Partial<SharingService>;

  beforeEach(async(() => {
    // stub SharingService for test purposes
   /* sharingServiceStub = {
     /*setData() {
        [{col: '1', score: '-1', preRow: '0', leftScore: '-2', diagonalScore: '-1', preCol: '0', row: '1', upScore: '-2'},
          {col: '2', score: '-2', preRow: '0', leftScore: '-2', diagonalScore: '-2', preCol: '1', row: '1', upScore: '-3'},
          {col: '1', score: '0', preRow: '1', leftScore: '-3', diagonalScore: '0', preCol: '0', row: '2', upScore: '-2'},
          {col: '2', score: '0', preRow: '1', leftScore: '-1', diagonalScore: '0', preCol: '1', row: '2', upScore: '-3'},
          {col: '2', row: '2'}, {col: '1', row: '1'}, {col: '0', row: '0'}, {sequence1: 'CC', sequence2: 'GC'}].toString();
      },
      getStringOne() {'CC'; },
      getStringTwo() {'GC'; },
      getMatch(){1;},
    };*/
    TestBed.configureTestingModule({
      imports: [MaterialModule,
        FormsModule],
      declarations: [NwGridComponent],
      providers: [SharingService
      // providers: [{provide: SharingService, useValue: sharingServiceStub}
      ]
    } );
    fixture = TestBed.createComponent(NwGridComponent);
    component = fixture.componentInstance;
    // sharingService from the root injector
    const sharingService = TestBed.get(SharingService);
    fixture.detectChanges();
  }));


  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
