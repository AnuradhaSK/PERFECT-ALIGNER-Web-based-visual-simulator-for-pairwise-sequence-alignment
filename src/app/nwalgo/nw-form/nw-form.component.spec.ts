import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NwFormComponent } from './nw-form.component';

describe('NwFormComponent', () => {
  let component: NwFormComponent;
  let fixture: ComponentFixture<NwFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NwFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NwFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
