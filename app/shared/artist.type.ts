
export class Artist {
   external_urls:{
      spotify:string
   };
   followers:{
      href:any;
      total:number
   };
   genres:string[];
   href:string;
   id:string;
   images:{
      height:number;
      url:string;
      width:number}[];
   name:string;
   popularity:number;
   type:string;
   uri:string
}

/*
{
   "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
   },
   "followers" : {
      "href" : null,
      "total" : 2750619
   },
   "genres" : [
      "british invasion",
      "classic rock",
      "merseybeat",
      "protopunk",
      "psychedelic rock",
      "rock"
   ],
   "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
   "id" : "3WrFJ7ztbogyGnTHbHJFl2",
   "images" : [
      {
         "height" : 1000,
         "url" : "https://i.scdn.co/image/934c57df9fbdbbaa5e93b55994a4cb9571fd2085",
         "width" : 1000
      },
      {
         "height" : 640,
         "url" : "https://i.scdn.co/image/5f70d98d3e4616a02a3afe2aa9a840b9157b92a1",
         "width" : 640
      },
      {
         "height" : 200,
         "url" : "https://i.scdn.co/image/7fe1a693adc52e274962f1c61d76ca9ccc62c191",
         "width" : 200
      },
      {
         "height" : 64,
         "url" : "https://i.scdn.co/image/857b1ce5b1b372b873b0a8bdb3ff8023b6c61d39",
         "width" : 64
      }
   ],
   "name" : "The Beatles",
   "popularity" : 86,
   "type" : "artist",
   "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
}
*/
