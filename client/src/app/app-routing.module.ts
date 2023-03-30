import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'about' , component: AboutComponent},
  {path:'clients' , component: ClientsComponent},
  {path:'products' , component: ProductsComponent},
  {path:'contactus' , component: ContactusComponent}, 
  {path:'productdetails/:id', component: ProductdetailsComponent}, 
  {path:'**' , redirectTo:'HomeComponent', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
