import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
//exportacion de componentes


//login
import { LoginComponent } from './component/usuario/login.component';

//carrucel
// import { CarrucelComponent } from './component/shared/carrucel/carrucel.component';

//slider
import { SliderComponent } from './slider/slider.component';
import { MenuComponent } from './component/menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,
    //login
    LoginComponent,
    //carrucel
    //  CarrucelComponent,
     SliderComponent,
     MenuComponent,
     //

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
