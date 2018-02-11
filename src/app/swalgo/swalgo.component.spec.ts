import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwalgoComponent } from './swalgo.component';

describe('SwalgoComponent', () => {
  let component: SwalgoComponent;
  let fixture: ComponentFixture<SwalgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwalgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
