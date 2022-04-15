import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { PostService } from './post.service';
import { from } from 'rxjs';

describe('PostService', () => {
  let httpTestingController: HttpTestingController;
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(PostService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch post', async () => {

    from(service.getBlogPosts()).subscribe((response) => {
    });

    const req = httpTestingController.expectOne({
      method: "GET",
      url: '/.netlify/functions/posts',
    });
   
    req.flush({});

    httpTestingController.verify();
  });
});
