import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeRoutingModule } from './home-routing.module';
// import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    RouterLink,
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class HomeModule { }
