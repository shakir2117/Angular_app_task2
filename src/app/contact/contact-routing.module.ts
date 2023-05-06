import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';

const routes:Routes=[
  {
    path:'contact', component:ContactComponent,
    children:[
      {
        path:'address', component:AddressComponent
      },
      {
        path:'contact', component:ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
