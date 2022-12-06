import { TestBed } from '@angular/core/testing';

import { LocalGifsService } from './local-gifs.service';

describe('LocalGifsService', () => {
  let service: LocalGifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalGifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
