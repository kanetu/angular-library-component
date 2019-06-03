#Important 

Library using Boostrap 4. You need install yourself

#Components

```html
  <lib-footer></lib-footer>
  <lib-header></lib-header>
  <lib-login></lib-login>
  <lib-left-sidebar></lib-left-sidebar>
```

## @Input HeaderComponent

```javascript
  @Input() logoUrl: string;
  @Input() avatarUrl: string;
  @Input() menuNavbar: { name: string, link: string }[];


  //Default variable
  this.logoUrl = 'http://pluspng.com/img-png/bootstrap-logo-png-logo-of-bootstrap-framework-195.png';
  this.avatarUrl  = 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/45256672_1055358751311056_3609953152255655936_n.jpg?_nc_cat=109&_nc_oc=AQnD_RZXH8Htxh4zaCGKWPJfr7UhWem3o1c7FjSNt79PNUiuONmttuwdFAH_ngZ3iCE&_nc_ht=scontent.fsgn5-6.fna&oh=ff10c22fcd5794366cd1f8fc0a9146e4&oe=5D59E9E0';

  this.menuNavbar = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Contact', link: '/contact'},
  ];

```
## @Input LeftSidebar Component

```javascript
  @Input() menuSidebar: { name: string, link: string }[];

  //Default variable
  this.menuSidebar = [
    {name: 'Menu 1', link: '/menu1'},
    {name: 'Menu 2', link: '/menu2'},
    {name: 'Menu 3', link: '/menu3'},
    {name: 'Menu 4', link: '/menu4'},
  ];
```

#Usage
In file app.module.ts

```javascript

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Import kanetu library
import { KanetuComponent, FooterComponent, HeaderComponent, LoginComponent, LeftSidebarComponent} from 'kanetu';

@NgModule({
  declarations: [
    AppComponent,
    KanetuComponent,
    FooterComponent, // <lib-footer></lib-footer>
    HeaderComponent, //<lib-header></lib-header>
    LoginComponent,// <lib-login></lib-login>
    LeftSidebarComponent // <lib-left-sidebar> </lib-left-sidebar>
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Declare @Input (app.component.ts)

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular01';

  menuSidebar = [
    {name: 'Hieu', link: '/'},
  ];
}

```

In file app.components.html

```html

<div class="container">
  <lib-header
  >
  </lib-header>

  <div class="row">

    <div class="col-3">
      <lib-left-sidebar
        [menuSidebar] = 'menuSidebar'
      >
      </lib-left-sidebar>
    </div>

    <div class="col-9">
        <lib-login></lib-login>
    </div>

  </div>
  <lib-footer></lib-footer>
</div>

```
