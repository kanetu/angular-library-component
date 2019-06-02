import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {


  @Input() menuSidebar: { name: string, link: string }[];


  constructor() {

    this.menuSidebar = [
      {name: 'Menu 1', link: '/menu1'},
      {name: 'Menu 2', link: '/menu2'},
      {name: 'Menu 3', link: '/menu3'},
      {name: 'Menu 4', link: '/menu4'},
    ];
  }

  ngOnInit() {
  }

}
