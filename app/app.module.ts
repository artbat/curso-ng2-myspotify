
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

@NgModule({
   imports: [
      BrowserModule
   ],
   declarations: [
      AppComponent,
      NavbarComponent,
      AboutComponent,
      SearchComponent ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
