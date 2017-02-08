
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from "./artist/artist.component";

import { AppRoutesModule } from './app.routes';
import { SpotifyService } from "./shared/spotify.service";

@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutesModule
   ],
   declarations: [
      AppComponent,
      NavbarComponent,
      AboutComponent,
      SearchComponent,
      ArtistComponent
   ],
   providers: [
      SpotifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
