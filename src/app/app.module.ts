import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PartOfSecondComponent } from './second/part-of-second/part-of-second.component';
import { ThirdComponent } from './third/third.component';
import { SnakePipe } from './pipes/snake-case-pipe';
import { FormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ComunicationComponent } from './comunication/comunication.component';
import { CuadraroComponent } from './comunication/cuadraro/cuadraro.component';
import { SaludadorComponent } from './comunication/saludador/saludador.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PartOfSecondComponent,
    ThirdComponent,
    SnakePipe,
    BasicFormComponent,
    ComunicationComponent,
    CuadraroComponent,
    SaludadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
