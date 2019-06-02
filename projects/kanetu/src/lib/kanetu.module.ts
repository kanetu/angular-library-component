import { NgModule } from '@angular/core';
import { KanetuComponent } from './kanetu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    KanetuComponent,
    FooterComponent,
    HeaderComponent,
    LeftSidebarComponent,
    LoginComponent
    ],
  imports: [
    CommonModule,
  ],
  exports: [
    KanetuComponent,
    FooterComponent,
    HeaderComponent,
    LeftSidebarComponent,
    LoginComponent
  ]
})
export class KanetuModule { }
