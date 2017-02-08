
import { Artist } from './artist.type'
import { Track } from './track.type'

export class Album {
   album_type:string;
   artists:Artist[];
   available_markets:(string|string)[];
   copyrights:{text:string; type:string}[];
   external_ids:{upc:string};
   external_urls:{spotify:string};
   genres:string[];
   href:string;
   id:string;
   images:({height:number; url:string; width:number}|{height:number; url:string; width:number}|{height:number; url:string; width:number})[];
   label:string;
   name:string;
   popularity:number;
   release_date:string;
   release_date_precision:string;
   tracks:{href:string; items:Track[]; limit:number; next:any; offset:number; previous:any; total:number};
   type:string;
   uri:string
}

/*
var album = {
   "album_type": "album",
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
   "copyrights": [
      {
         "text": "(P) 2012 Columbia Records, a Division of Sony Music Entertainment",
         "type": "P"
      }
   ],
   "external_ids": {
      "upc": "886443652460"
   },
   "external_urls": {
      "spotify": "https://open.spotify.com/album/1nrDZQLT9EfFArdk9oSCxQ"
   },
   "genres": [],
   "href": "https://api.spotify.com/v1/albums/1nrDZQLT9EfFArdk9oSCxQ",
   "id": "1nrDZQLT9EfFArdk9oSCxQ",
   "images": [
      {
         "height": 640,
         "url": "https://i.scdn.co/image/332e01f24f1eb71d898eb0db8d3d641eea5b0240",
         "width": 578
      },
      {n
         "height": 300,
         "url": "https://i.scdn.co/image/aa7f86e7eddcd390aebbd553d2a8514bd58701b9",
         "width": 271
      },
      {
         "height": 64,
         "url": "https://i.scdn.co/image/7a7e8897805b7ce88ef698edd45b650423004f28",
         "width": 58
      }
   ],
   "label": "Columbia",
   "name": "Music From Another Dimension!",
   "popularity": 55,
   "release_date": "2012-11-02",
   "release_date_precision": "day",
   "tracks": {
      "href": "https://api.spotify.com/v1/albums/1nrDZQLT9EfFArdk9oSCxQ/tracks?offset=0&limit=50",
      "items": [
         {
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
         }
      ],
      "limit": 50,
      "next": null,
      "offset": 0,
      "previous": null,
      "total": 18
   },
   "type": "album",
   "uri": "spotify:album:1nrDZQLT9EfFArdk9oSCxQ"
};
*/