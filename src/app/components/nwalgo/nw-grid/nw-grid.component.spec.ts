import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '../../../material.module';
import {FormsModule} from '@angular/forms';
import {NwGridComponent} from './nw-grid.component';
import {SharingService} from '../../../services/sharing.service';
import {Cell} from '../../../models/cell';

// Sharing mock service
export class SharingMock {
  // mock data
  data = [{col: '1', score: '-1', preRow: '0', leftScore: '-2', diagonalScore: '-1', preCol: '0', row: '1', upScore: '-2'},
    {col: '2', score: '-2', preRow: '0', leftScore: '-2', diagonalScore: '-2', preCol: '1', row: '1', upScore: '-3'},
    {col: '1', score: '0', preRow: '1', leftScore: '-3', diagonalScore: '0', preCol: '0', row: '2', upScore: '-2'},
    {col: '2', score: '0', preRow: '1', leftScore: '-1', diagonalScore: '0', preCol: '1', row: '2', upScore: '-3'},
    {col: '2', row: '2'}, {col: '1', row: '1'}, {col: '0', row: '0'}, {sequence1: 'CC', sequence2: 'GC'}];
  stringOne = 'CC';
  stringTwo = 'GC';
  match = '1';
  mismatch = '-1';
  gap = '-1';
  visibility = true;


  public getStringOne(): any {
    return this.stringOne;
  }

  public getStringTwo(): any {
    return this.stringTwo;
  }

  public getMatch(): any {
    return this.match;
  }

  public getMismatch(): any {
    return this.mismatch;
  }

  public getGap(): any {
    return this.gap;
  }

  public getVisibility(): any {
    return this.visibility;
  }
}

describe('NwGridComponent', () => {
  let component: NwGridComponent;
  let fixture: ComponentFixture<NwGridComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [MaterialModule,
        FormsModule],
      declarations: [NwGridComponent, Cell],
      providers: [{provide: SharingService, useClass: SharingMock}
      ]
    });
    fixture = TestBed.createComponent(NwGridComponent);
    component = fixture.componentInstance;
    // sharingService from the root injector
    const sharingService = TestBed.get(SharingService);
    fixture.detectChanges();
  }));


  /*it('should create nw-grid', () => {
    expect(component).toBeTruthy();
  });*/
});
