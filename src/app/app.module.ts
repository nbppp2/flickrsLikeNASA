import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SingleImageComponentComponent } from './single-image-component/single-image-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleImageComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
