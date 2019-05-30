import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';

  logoUrl:string = "http://pluspng.com/img-png/bootstrap-logo-png-logo-of-bootstrap-framework-195.png";
  avatarUrl:string  = "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/45256672_1055358751311056_3609953152255655936_n.jpg?_nc_cat=109&_nc_oc=AQnD_RZXH8Htxh4zaCGKWPJfr7UhWem3o1c7FjSNt79PNUiuONmttuwdFAH_ngZ3iCE&_nc_ht=scontent.fsgn5-6.fna&oh=ff10c22fcd5794366cd1f8fc0a9146e4&oe=5D59E9E0";

  menuNavbar = [
    {name: "Home", link:"/"},
    {name: "About", link:"/about"},
    {name: "Contact", link:"/contact"},

  ];

  menuSidebar = [
    {name: "Product", link:"/product"},
    {name: "Example", link:"/example"},
    {name: "Guide", link:"/guide"},

  ];
}
