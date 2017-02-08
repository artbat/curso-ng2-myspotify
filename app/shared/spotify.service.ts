
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
   
   constructor(private _http:Http) {
      console.log('Se ha creado una instancia del servicio de spotify');
   }
   
   searchMusic(str:string, type = 'artist') {
      let searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
      return this._http.get(searchUrl)
         .map(res => res.json());
   }
   
   getArtist(id:string) {
      let artistUrl = 'https://api.spotify.com/v1/artists/' + id;
      return this._http.get(artistUrl)
         .map(res => res.json());
   }
   
   getAlbums(artistId:string) {
      let albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
      return this._http.get(albumsUrl)
         .map(res => res.json());
   }
   
   getAlbum(id:string) {
      let albumUrl = 'https://api.spotify.com/v1/albums/' + id;
      return this._http.get(albumUrl)
         .map(res => res.json());
   }
}