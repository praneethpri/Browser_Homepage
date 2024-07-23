import { TestBed } from '@angular/core/testing';

import { LinkImportService } from './link-import.service';

describe('LinkImportService', () => {
  let service: LinkImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
