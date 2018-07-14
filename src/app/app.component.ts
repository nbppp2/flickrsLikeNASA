import { Component, OnInit } from '@angular/core';
import { FlickrService } from './flickr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  urls: any[]; // FIXME

  constructor(private flickrService: FlickrService) {
    this.urls = new Array<any>();
  }

  // TODO: This should be updated to load more pages as you scroll.
  // TODO: the layout should better handle different image sizes.
  // TODO: allow filtering of images.
  ngOnInit() {
    this.flickrService.getFlickrFeed().subscribe((res: any) => {
      res.photos.photo.forEach(photoData => {
        let urlDefault = 'https://farm' + photoData.farm + '.staticflickr.com/' + photoData.server + '/' + photoData.id + '_' + photoData.secret + '.jpg';
        let urlLarge = 'https://farm' + photoData.farm + '.staticflickr.com/' + photoData.server + '/' + photoData.id + '_' + photoData.secret + '_b.jpg';
        this.urls.push(urlDefault);
      });
      console.log(res.constructor.name)
    })
  }
}
