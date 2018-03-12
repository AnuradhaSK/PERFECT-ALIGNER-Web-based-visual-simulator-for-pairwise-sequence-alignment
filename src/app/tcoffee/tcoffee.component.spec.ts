import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoffeeComponent } from './tcoffee.component';

describe('TcoffeeComponent', () => {
  let component: TcoffeeComponent;
  let fixture: ComponentFixture<TcoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
