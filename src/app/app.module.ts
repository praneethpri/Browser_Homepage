import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WallpaperComponent } from './components/wallpaper/wallpaper.component';

@NgModule({
  declarations: [
    AppComponent,
    WallpaperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
