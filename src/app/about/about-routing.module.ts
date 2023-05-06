import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from '../contact/address/address.component';

const routes: Routes = [
  {
    path:'',component:AboutComponent,
    children:[
      {
        path:'about',component:AboutComponent
      }

    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
