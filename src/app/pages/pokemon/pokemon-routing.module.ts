import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  {
    path: '', children: [
      { 
        path: 'list', component: ListPokemonComponent
      },
      {
        path: 'detail/:name', component: DetailPokemonComponent
      },
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
