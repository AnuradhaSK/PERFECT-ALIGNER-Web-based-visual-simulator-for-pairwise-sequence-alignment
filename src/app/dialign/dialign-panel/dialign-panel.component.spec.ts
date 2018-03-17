import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialignPanelComponent } from './dialign-panel.component';

describe('DialignPanelComponent', () => {
  let component: DialignPanelComponent;
  let fixture: ComponentFixture<DialignPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialignPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialignPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
