import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

const url = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  debouncePokemon(e) {
    return e.debounceTime(1000)
      .distinctUntilChanged()
      .switchMap(p => this.searchPokemon(p));
  }

  searchPokemon(input) {
    return this.http.get(url + `pokedex?pokename=${input}`);
  }
}
