import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieyearComponent } from './movieyear.component';

describe('MovieyearComponent', () => {
  let component: MovieyearComponent;
  let fixture: ComponentFixture<MovieyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
