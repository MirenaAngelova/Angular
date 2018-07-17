import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetailService } from './../../services/pokemon-detail.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() pokemon;
  public pokemonToView;
  constructor(private pokemonService: PokemonDetailService) {
    this.pokemonService.receivedPokemon$.subscribe(data => {
      this.pokemonToView = data;
    });
  }

  ngOnInit() {
  }

  showDetails(pokemon) {
    this.pokemonService.getPokemonData(pokemon);
  }
}
