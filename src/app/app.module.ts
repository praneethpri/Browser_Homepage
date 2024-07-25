import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { LinksComponent } from './components/links/links.component';
import { LinkButtonComponent } from './components/link-button/link-button.component';
import { ControlButtonsComponent } from './components/control-buttons/control-buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddLinkComponent } from './components/add-link/add-link.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    LinksComponent,
    LinkButtonComponent,
    ControlButtonsComponent,
    AddLinkComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
