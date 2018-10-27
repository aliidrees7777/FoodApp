import { TestBed } from '@angular/core/testing';

import { AddrecipeService } from './addrecipe.service';

describe('AddrecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddrecipeService = TestBed.get(AddrecipeService);
    expect(service).toBeTruthy();
  });
});
