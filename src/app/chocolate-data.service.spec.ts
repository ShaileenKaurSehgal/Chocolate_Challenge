import { TestBed } from '@angular/core/testing';

import { ChocolateDataService } from './chocolate-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChocolateDataService', () => {
  let service: ChocolateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientTestingModule, HttpClientModule],
    });
    service = TestBed.inject(ChocolateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
