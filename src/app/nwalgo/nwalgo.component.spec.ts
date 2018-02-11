import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NwalgoComponent } from './nwalgo.component';

describe('NwalgoComponent', () => {
  let component: NwalgoComponent;
  let fixture: ComponentFixture<NwalgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NwalgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NwalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
