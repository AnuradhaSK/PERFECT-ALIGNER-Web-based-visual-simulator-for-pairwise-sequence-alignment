import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {RouterLinkWithHref} from '@angular/router';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {MaterialModule} from '../material.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create Home component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in h3 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Sequence Alignment Algorithms');
  });

  it('should have a link to Needleman-Wunch Algo', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => de.properties['href'] === '/nwalgo');
    expect(index).toBe(0);
  });

  it('should have a link to SmithWaterman Algo', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => de.properties['href'] === '/swalgo');
    expect(index).toBe(1);
  });

  it('should have a link to Tcoffee Simulation', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => de.properties['href'] === '/tcoffee');
    expect(index).toBe(2);
  });

  it('should have a link to Dialign Simulation', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => de.properties['href'] === '/dialign');
    expect(index).toBe(3);
  });

});
