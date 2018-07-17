import { Component, OnInit, Input, } from '@angular/core';
import { FocusService } from '../../services/focus/focus.service';

@Component({
  selector: 'app-focused',
  templateUrl: './focused.component.html',
  styleUrls: ['./focused.component.scss']
})
export class FocusedComponent implements OnInit {
  @Input() pokeImg;
  @Input() pokeId;
  pokemonImage;
  pokemonOnFocus;
  constructor(private focus: FocusService) {
    // this.focus.elevatePokemonData('001').subscribe(data => {
    //   // this.pokemonOnFocus = data;
    //   this.pokemonImage = `http://localhost:5000/${this.pokeImg}`;
    // });

    this.focus.elevatePokemonData('001').subscribe(data => {
      this.pokemonImage = `http://localhost:5000/${this.pokeImg}`;
    });
  }
  ngOnInit() {
  }
}
