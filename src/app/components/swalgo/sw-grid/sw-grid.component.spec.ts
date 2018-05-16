import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwGridComponent } from './sw-grid.component';
import {Cell} from '../../../models/cell';
import {SharingMock} from '../../../../mock';
import {SharingService} from '../../../services/sharing.service';

describe('SwGridComponent', () => {
  let component: SwGridComponent;
  let fixture: ComponentFixture<SwGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[],
      declarations: [ SwGridComponent,Cell],
      providers: [{provide: SharingService, useClass: SharingMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create sw-grid component', () => {
    expect(component).toBeTruthy();
  });
});
