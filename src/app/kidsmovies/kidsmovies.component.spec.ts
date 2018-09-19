import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsmoviesComponent } from './kidsmovies.component';

describe('KidsmoviesComponent', () => {
  let component: KidsmoviesComponent;
  let fixture: ComponentFixture<KidsmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
