
import { Artist } from './artist.type'

export class Track {
   artists: Artist[];
   available_markets:(string|string)[];
   disc_number:number;
   duration_ms:number;
   explicit:boolean;
   external_urls:{spotify:string};
   href:string;
   id:string;
   name:string;
   preview_url:string;
   track_number:number;
   type:string;
   uri:string
}

/*
var track = {
   "artists": [
      {
         "external_urls": {
            "spotify": "https://open.spotify.com/artist/7Ey4PD4MYsKc5I2dolUwbH"
         },
         "href": "https://api.spotify.com/v1/artists/7Ey4PD4MYsKc5I2dolUwbH",
         "id": "7Ey4PD4MYsKc5I2dolUwbH",
         "name": "Aerosmith",
         "type": "artist",
         "uri": "spotify:artist:7Ey4PD4MYsKc5I2dolUwbH"
      }
   ],
   "available_markets": ["US", "UY"],
   "disc_number": 1,
   "duration_ms": 316573,
   "explicit": false,
   "external_urls": {
      "spotify": "https://open.spotify.com/track/0byidR360eLCjAigNF5SB3"
   },
   "href": "https://api.spotify.com/v1/tracks/0byidR360eLCjAigNF5SB3",
   "id": "0byidR360eLCjAigNF5SB3",
   "name": "LUV XXX",
   "preview_url": "https://p.scdn.co/mp3-preview/101308d78d6790f97206ab0698189ab6200f4546?cid=null",
   "track_number": 1,
   "type": "track",
   "uri": "spotify:track:0byidR360eLCjAigNF5SB3"
};
*/
