import { TestBed } from '@angular/core/testing';

import { ApiGestorService } from './api-gestor.service';

describe('ApiGestorService', () => {
  let service: ApiGestorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGestorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
