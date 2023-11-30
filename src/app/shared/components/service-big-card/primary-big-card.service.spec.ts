import { TestBed } from '@angular/core/testing';

import { PrimaryBigCardService } from './primary-big-card.service';

describe('PrimaryBigCardService', () => {
  let service: PrimaryBigCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimaryBigCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
