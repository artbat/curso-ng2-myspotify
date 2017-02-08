
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }      from './about/about.component';
import { SearchComponent }      from './search/search.component';

const appRoutes: Routes = [
   { path: '', redirectTo: '/search', pathMatch: 'full' },
   { path: 'search', component: SearchComponent },
   { path: 'about', component: AboutComponent }
];

export const AppRoutesModule:ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
