import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwFormComponent } from './sw-form.component';

describe('SwFormComponent', () => {
  let component: SwFormComponent;
  let fixture: ComponentFixture<SwFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
