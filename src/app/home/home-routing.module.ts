import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes=[
{
  path:'', component:HomeComponent,
  children:[{
    path:'', component:HomeComponent
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'footer', component:FooterComponent
  }
  ]
  
}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
