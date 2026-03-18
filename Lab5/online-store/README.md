# OnlineStore

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


import { BehaviorSubject, Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private albumsCache = new BehaviorSubject<Album[] | null>(null);

  getAlbums(): Observable<Album[]> {
    // Если кеш пуст, загружаем с сервера
    if (!this.albumsCache.value) {
      return this.http.get<Album[]>(`${this.baseUrl}/albums`)
        .pipe(
          tap(albums => this.albumsCache.next(albums)),
          shareReplay(1)
        );
    }
    // Если кеш есть, возвращаем его
    return this.albumsCache.asObservable();
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album)
      .pipe(
        tap(() => {
          // Обновляем альбом в кеше
          const current = this.albumsCache.value || [];
          const updated = current.map(a => a.id === album.id ? album : a);
          this.albumsCache.next(updated);
        })
      );
  }
}