
import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: `
        <h1>{{pageTitle}}</h1>
    `
})
export class AppComponent {
   pageTitle:string = 'Mi primera app Angular 2';
}
