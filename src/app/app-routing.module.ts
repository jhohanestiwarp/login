import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//guards


//login
import { LoginComponent } from './component/usuario/login.component';

//carrucel
// import { CarrucelComponent } from './component/shared/carrucel/carrucel.component';

//slider
import { SliderComponent } from './slider/slider.component';

//menu
import { MenuComponent } from './component/menu/menu.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
 

  //login
  { path: 'login', component: LoginComponent },

  //Carrucel
  // { path: 'Carrucel', component: CarrucelComponent },

  { path: 'slider', component: SliderComponent },

  { path: 'app-menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
