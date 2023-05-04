import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from '../home/home/home.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports:[
    AboutComponent
  ]
})
export class AboutModule { }
