
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

import { AppRoutesModule } from './app.routes';
import { SpotifyService } from "./shared/spotify.service";

@NgModule({
   imports: [
      BrowserModule,
      HttpModule,
      AppRoutesModule
   ],
   declarations: [
      AppComponent,
      NavbarComponent,
      AboutComponent,
      SearchComponent ],
   providers: [
      SpotifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
