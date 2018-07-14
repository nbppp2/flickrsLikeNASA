import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  constructor(private _jsonp: Jsonp) { }

  // FIXME use the flickr-sdk node module for better encapsulation.
  getFlickrFeed() {
    const url = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&jsoncallback=JSONP_CALLBACK'

    return this._jsonp.get(url, 'JSONP_CALLBACK')
      .pipe(
        map((response: Response) => response.json())
        // .catch(this._handleError);
      )
  }
}
