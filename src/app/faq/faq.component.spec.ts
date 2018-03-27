import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FaqComponent} from './faq.component';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FaqComponent]
    });
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create FAQ component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in h2 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Frequently Asked Questions');
  });
});
