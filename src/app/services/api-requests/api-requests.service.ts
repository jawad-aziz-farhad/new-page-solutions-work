import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { UNSPLASH_ACCESS_KEY } from 'src/app/constants';
import { createApi } from 'unsplash-js';
import { map } from 'rxjs/operators';
import { Payload } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(private readonly http: HttpClient) { }

  getImages(payload: Payload): Observable<any> {
    const unsplash = createApi({ accessKey: UNSPLASH_ACCESS_KEY});
    return from(unsplash.search.getPhotos({...payload})).pipe(map(response => response.response) )
  }
}
