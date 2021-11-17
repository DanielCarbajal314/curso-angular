import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PartOfSecondComponent } from './second/part-of-second/part-of-second.component';
import { ThirdComponent } from './third/third.component';
import { SnakePipe } from './pipes/snake-case-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ComunicationComponent } from './comunication/comunication.component';
import { CuadraroComponent } from './comunication/cuadraro/cuadraro.component';
import { SaludadorComponent } from './comunication/saludador/saludador.component';
import { PersonRegistryComponent } from './person-registry/person-registry.component';
import { PersonFormComponent } from './person-registry/person-form/person-form.component';
import { PersonTableComponent } from './person-registry/person-table/person-table.component';
import { PhotosAlbumComponent } from './photos-album/photos-album.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskRegistryFormComponent } from './task-form/task-registry-form/task-registry-form.component';
import { TaskTableComponent } from './task-form/task-table/task-table.component';
import { SunatHttpInterceptor } from './shared/sunat-http-interceptor';
import { timer } from 'rxjs';
import { ClockComponent } from './clock/clock.component';
import { BasicReativeFormComponent } from './basic-reative-form/basic-reative-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperComponent } from './stepper/stepper.component';

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
    SaludadorComponent,
    PersonRegistryComponent,
    PersonFormComponent,
    PersonTableComponent,
    PhotosAlbumComponent,
    TaskFormComponent,
    TaskRegistryFormComponent,
    TaskTableComponent,
    ClockComponent,
    BasicReativeFormComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule
  ],
  providers: [
    // Inyecto el interceptor 
    { provide: HTTP_INTERCEPTORS, useClass: SunatHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { };


