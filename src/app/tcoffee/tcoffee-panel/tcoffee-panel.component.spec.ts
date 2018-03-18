import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoffeePanelComponent } from './tcoffee-panel.component';

describe('TcoffeePanelComponent', () => {
  let component: TcoffeePanelComponent;
  let fixture: ComponentFixture<TcoffeePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcoffeePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcoffeePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
