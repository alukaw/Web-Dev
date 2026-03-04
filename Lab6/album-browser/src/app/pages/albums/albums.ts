import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class AlbumsComponent implements OnInit {
  albums = signal<Album[]>([]);
  loading = signal(true);
  error = signal('');

  constructor(private albumService: AlbumService) {}


  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (albums: Album[]) => {
        this.albums.set(albums);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load albums');
        this.loading.set(false);
      }
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums.set(this.albums().filter(a => a.id !== id));
      },
      error: () => {
        this.error.set('Failed to delete album');
      }
    });
  }
}