import { Component, OnInit } from '@angular/core';
import { HttpMoviesService } from '../../services/http-movies.service';
import { Movie } from '../../models/movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent {
  constructor(private http: HttpMoviesService) {}

  get() {
    this.http.getMovies().subscribe();
  }

  post() {
    const movie: Movie = {
      country: 'Poland',
      director: 'Marek Brodzki',
      category: 'Fantasy',
      plot: 'Zabójca potworów musi wybrać mniejsze zło.',
      poster: null,
      year: '2001',
      title: 'Wiedźmin',
      imdbRating: '10.0',
    };
    this.http.postMovie(movie).subscribe();
  }

  put() {
    const movie: Movie = {
      id: '54',
      country: 'Poland',
      director: 'Marek Brodzki',
      category: 'Fantasy',
      plot: 'Zabójca potworów musi wybrać mniejsze zło.',
      poster: null,
      year: '2001',
      title: 'Wiedźmin 2',
      imdbRating: '10.0',
    };
    this.http.putMovie(movie).subscribe();
  }

  patch() {
    const movie: Partial<Movie> = {
      id: '54',
      plot: 'Gerald szuka Ciri.',
    };
    this.http.patchMovie(movie).subscribe();
  }

  delete() {
    this.http.deleteMovie('54').subscribe();
  }

  error() {
    this.http.makeError().subscribe();
  }
}
