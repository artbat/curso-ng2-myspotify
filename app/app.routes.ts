
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }      from './about/about.component';
import { SearchComponent }      from './search/search.component';
import { ArtistComponent } from "./artist/artist.component";

const appRoutes: Routes = [
   { path: '', redirectTo: '/search', pathMatch: 'full' },
   { path: 'search', component: SearchComponent },
   { path: 'about', component: AboutComponent },
   { path: 'artist/:id', component: ArtistComponent }
];

export const AppRoutesModule:ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
