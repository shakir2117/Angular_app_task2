import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from '../home/home/home.component';
import { HomeModule } from '../home/home.module';
import { TextColorDirective } from './text-color.directive';
import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  declarations: [
    AboutComponent,
    TextColorDirective
  ],
  imports: [
    CommonModule,
    HomeModule,
    AboutRoutingModule
  ],
  exports:[
    AboutComponent
  ]
})
export class AboutModule { }
