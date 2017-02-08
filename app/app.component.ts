
import { Component } from '@angular/core';
import { SpotifyService } from "./shared/spotify.service";

@Component({
   moduleId: module.id,
   selector: 'my-app',
   templateUrl: 'app.component.html'
})
export class AppComponent {
   pageTitle:string = 'Mi primera app Angular 2';
   
   constructor(public spotifyService:SpotifyService){}
}
