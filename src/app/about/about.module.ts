import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeModule } from '../home/home.module';
import { AboutRoutingModule } from './about-routing.module';
import { TextColorDirective } from './text-color.directive';



@NgModule({
  declarations: [
    AboutComponent,
    TextColorDirective,
    ],
  imports: [
    CommonModule,
    HomeModule,
    AboutRoutingModule,

  ],
  exports:[
    AboutComponent
  ]
})
export class AboutModule { }
