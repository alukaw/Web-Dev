import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetailComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);

  album = signal<Album | null>(null);
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe({
      next: (album: Album) => {
        this.album.set(album);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load album');
        this.loading.set(false);
      }
    });
  }

  save(): void {
    const current = this.album();
    if (!current) return;

    const updatedAlbum: Album = { ...current };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (response: Album) => {
        this.album.set(response); // обновляем сигнал
      },
      error: () => {
        this.error.set('Failed to update album');
      }
    });
  }

  back(): void {
    this.router.navigate(['/albums']);
  }
}