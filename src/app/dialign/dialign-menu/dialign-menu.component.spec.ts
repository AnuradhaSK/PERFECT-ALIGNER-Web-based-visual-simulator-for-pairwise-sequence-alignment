import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialignMenuComponent } from './dialign-menu.component';

describe('DialignMenuComponent', () => {
  let component: DialignMenuComponent;
  let fixture: ComponentFixture<DialignMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialignMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialignMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
