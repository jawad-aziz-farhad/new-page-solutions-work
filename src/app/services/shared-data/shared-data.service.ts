import { Injectable } from '@angular/core';
import { UnSplashApiResponse } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private data: UnSplashApiResponse;

  constructor() { }

  set apiResponse (response: UnSplashApiResponse) { 
    if (this.data?.results?.length > 0) {
      this.data.results = [...this.data.results, ...response.results];
    } else {
      this.data = response;
    }
  }

  get apiResponse(): UnSplashApiResponse { return this.data; }
}
