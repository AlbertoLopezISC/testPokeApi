import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { FormatFeaturePipe } from 'src/app/pipes/format-feature.pipe';


@NgModule({
  declarations: [
    PokemonComponent,
    ListPokemonComponent,
    DetailPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormatFeaturePipe
  ]
})
export class PokemonModule { }
