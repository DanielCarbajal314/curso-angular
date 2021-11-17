import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbueloComponent } from './abuelo/abuelo.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { BasicReativeFormComponent } from './basic-reative-form/basic-reative-form.component';
import { ClockComponent } from './clock/clock.component';
import { ComunicationComponent } from './comunication/comunication.component';
import { FirstComponent } from './first/first.component';
import { PersonRegistryComponent } from './person-registry/person-registry.component';
import { PhotosAlbumComponent } from './photos-album/photos-album.component';
import { SecondComponent } from './second/second.component';
import { StepperComponent } from './stepper/stepper.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksWithMaterialComponent } from './tasks-with-material/tasks-with-material.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'basic-comunication', component: ComunicationComponent },  
  { path: 'person-form', component: PersonRegistryComponent },  
  { path: 'photos', component: PhotosAlbumComponent }, 
  { path: 'task', component: TaskFormComponent }, 
  { path: 'time', component: ClockComponent },
  { path: 'basic-reactive-form', component: BasicReativeFormComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'material-task', component: TasksWithMaterialComponent },
  { path: 'grandFather', component: AbueloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
