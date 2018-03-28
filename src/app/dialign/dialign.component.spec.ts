import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialignComponent } from './dialign.component';


describe('DialignComponent', () => {
  let component: DialignComponent;
  let fixture: ComponentFixture<DialignComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialignComponent ]
    })
    fixture = TestBed.createComponent(DialignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
