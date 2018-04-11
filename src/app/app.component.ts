import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <!--<h1>Hello {{name}}</h1>-->
    <!---->
    <!--<user></user>-->
    <ul style="display: inline-block">
        <li><a routerLink="/">home</a></li>
        <li><a routerLink="/about">about</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
