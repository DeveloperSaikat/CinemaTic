import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsemoviesComponent } from './browsemovies.component';

describe('BrowsemoviesComponent', () => {
  let component: BrowsemoviesComponent;
  let fixture: ComponentFixture<BrowsemoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsemoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsemoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
