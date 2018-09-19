import { TestBed, inject } from '@angular/core/testing';

import { MovieservService } from './movieserv.service';

describe('MovieservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieservService]
    });
  });

  it('should be created', inject([MovieservService], (service: MovieservService) => {
    expect(service).toBeTruthy();
  }));
});
