import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { LinksComponent } from './components/links/links.component';
import { LinkButtonComponent } from './components/link-button/link-button.component';
import { ControlButtonsComponent } from './components/control-buttons/control-buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddLinkComponent } from './components/add-link/add-link.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    LinksComponent,
    LinkButtonComponent,
    ControlButtonsComponent,
    AddLinkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
