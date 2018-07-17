import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:5000';

@Injectable()
export class FocusService {

  constructor(private http: HttpClient) { }

  elevatePokemonData(payload) {
   return this.http.get(baseUrl + `/pokemon?pokemonId=${payload}`);
  }
}

