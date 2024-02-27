import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokemonListItem } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  pokemonList: PokemonListItem[] = [];

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons(150, 0).subscribe((data) => {
      this.pokemonList = data.results;
      
    });
  }

  goToPokemonDetail(name: string){
    this.router.navigate([`/pokemon/detail/${name}`]);
  }

}
