import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  urls: string[];

  ngOnInit() {
    this.urls = [
      "https://imgs.xkcd.com/comics/soda_sugar_comparisons.png",
      "https://imgs.xkcd.com/comics/success.png",
      "https://imgs.xkcd.com/comics/going_west.png",
      "https://imgs.xkcd.com/comics/bad_map_projection_time_zones.png",
      "https://imgs.xkcd.com/comics/actors.png",
      "https://imgs.xkcd.com/comics/unscientific.png",
      "https://imgs.xkcd.com/comics/literally.png",
      "https://imgs.xkcd.com/comics/induced_current.png",
    ]
  }
}
