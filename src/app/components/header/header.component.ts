import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() logoUrl:string;
  @Input() avatarUrl: string;
  @Input() menuNavbar: JSON;


  constructor() {

  }

  ngOnInit() {
  }

}
