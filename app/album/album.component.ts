
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../shared/spotify.service';

import { Artist } from '../shared/artist.type';
import { Album } from '../shared/album.type';
import { Track } from '../shared/track.type';

@Component({
   moduleId: module.id,
   selector: 'album',
   templateUrl: 'album.component.html'
})

export class AlbumComponent {
   id:string;
   album:Album[];
   tracks:Track[];
   
   constructor(
      private _spotifyService:SpotifyService,
      private _route:ActivatedRoute
   ){}
   
   onPopularityClicked(popularity){
      console.log(`La popularidad es del ${popularity}%!`);
   }
   
   ngOnInit() {
      this._route.params
         .map(params => params['id'])
         .subscribe((id) => {
            this._spotifyService.getAlbum(id)
               .subscribe(album => {
                  this.album = album;
                  this.tracks = album.tracks.items;
               })
         })
   }
}
