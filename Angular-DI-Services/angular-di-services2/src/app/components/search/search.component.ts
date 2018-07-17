import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from './../../services/search.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  sub$;
  public pokeData;
  targetedPokemon = new Subject<any>();
  pokemonToView = new Subject<any>();

  constructor(private searchService: SearchService) {
    this.searchService.debouncePokemon(this.targetedPokemon)
    .subscribe(data => {
      this.pokeData = data;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  search(e) {
    this.targetedPokemon.next(e.target.value);
    console.log(this.targetedPokemon);
  }
}

