import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo.model';

@Component({
  standalone: true,
  selector: 'app-album-photos',
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotosComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);

  photos = signal<Photo[]>([]);
  loading = signal(true);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbumPhotos(id).subscribe({
      next: (photos) => {
        this.photos.set(photos);
        this.loading.set(false);
      },
      error: (err) => {
        console.log(err);
        this.loading.set(false);
      }
    });
  }

  back(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['/albums', id]);
  }
}