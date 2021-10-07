import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { ServerService } from './server.service';

describe('ServerService', () => {
  let service: ServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getUserByUserid function', () => {
    const service: ServerService = TestBed.inject(ServerService);
    expect(service.getUserByUserid).toBeTruthy();
  });

  it('should have getRepoListByUserid function', () => {
    const service: ServerService = TestBed.inject(ServerService);
    expect(service.getRepoListByUserid).toBeTruthy();
  });

  it('should have getRepoTopics function', () => {
    const service: ServerService = TestBed.inject(ServerService);
    expect(service.getRepoTopics).toBeTruthy();
  });

});
