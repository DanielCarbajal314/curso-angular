import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './models/photo.model';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photos-album',
  templateUrl: './photos-album.component.html',
  styleUrls: ['./photos-album.component.scss']
})
export class PhotosAlbumComponent implements OnInit, AfterViewChecked {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) { 
  }
  ngAfterViewChecked(): void {
  }

  ngOnInit(): void {
    this.photoService.getAllPhotos().subscribe({
      next: photos => {
        this.photos = photos.slice(4980);
        console.log('EL SERVIDOR RESPONDIO !!!')   
      },
      error: error=> console.error(error),
      complete: () => console.log('He Terminado')      
    });
  }

  loadServerData() {
    this.photoService.getAllPhotos().subscribe(photos => {
      this.photos = photos.slice(4980);
    });
  }

}
