import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoffeeMenuComponent } from './tcoffee-menu.component';

describe('TcoffeeMenuComponent', () => {
  let component: TcoffeeMenuComponent;
  let fixture: ComponentFixture<TcoffeeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcoffeeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcoffeeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
