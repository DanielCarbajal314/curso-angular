import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ComunicationComponent } from './comunication/comunication.component';
import { FirstComponent } from './first/first.component';
import { PersonRegistryComponent } from './person-registry/person-registry.component';
import { PhotosAlbumComponent } from './photos-album/photos-album.component';
import { SecondComponent } from './second/second.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
