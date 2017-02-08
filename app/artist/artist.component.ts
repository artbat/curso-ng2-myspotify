
import { Artist } from "../shared/artist.type";
import { Album } from "../shared/album.type";

import { SpotifyService } from "../shared/spotify.service";
import { ActivatedRoute } from "@angular/router";

import { OnInit, Component } from "@angular/core";

@Component({
   moduleId: module.id,
   selector: 'artist',
   templateUrl: 'artist.component.html',
})

export class ArtistComponent implements OnInit {
   id:string;
   artist:Artist;
   albums:Album[];
   
   constructor(
      private _spotifyService:SpotifyService,
      private _route:ActivatedRoute
   ){}
   
   ngOnInit(){
      this._route.params
         .map(params => params['id'])
         .subscribe(id => {
            this._spotifyService.getArtist(id)
               .subscribe(artist => {
                  this.artist = artist
               });

            this._spotifyService.getAlbums(id)
               .subscribe(albums  => {
                  this.albums = albums.items
               })
         })
   }
   
}
