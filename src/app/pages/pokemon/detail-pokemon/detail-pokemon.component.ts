import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, TypeDetail } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  pokemonName: string = '';
  pokemonDetail: Pokemon | null = null;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pokemonName = params['name'];
      this.getPokemonDetail();
    });
    // this.pokemonName = this.route.snapshot.paramMap.get('name')!;
    // this.getPokemonDetail();
  }

  makeSound() {
    const audio = new Audio(this.pokemonDetail?.cries.latest);
    audio.load();
    audio.play();
  }

  getPokemonDetail() {
    this.pokemonService.getPokemon(this.pokemonName).subscribe({
      next: (data) => {
        this.pokemonDetail = data;
      },
      error: (error) => {
        this.pokemonDetail = null;
      }
    });
  }

  showTypeDetail(type: string) {
    this.pokemonService.getTypeDetail(type).subscribe({
      next: (resp: TypeDetail) => {
        Swal.fire({
          title: `Información del daño por tipo: ${type}`,
          width: 800,
          html: `

          <div class="d-flex flex-column flex-md-row justify-content-center gap-5">
            <div class="d-flex flex-column col-12 col-md-5">
                <h3>Daño a</h3>
                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                ${resp.damage_relations.double_damage_to.map((item) => item.name).join(', ')}.
                <hr>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                ${resp.damage_relations.half_damage_to.map((item) => item.name).join(', ')}.
                ${resp.damage_relations.no_damage_from.length > 0
              ? `
                    <hr>
                    <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 5%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    ${resp.damage_relations.no_damage_from.map((item) => item.name).join(', ')}`
              : ''
            }
                
            </div>
            <div class="d-flex flex-column col-12 col-md-5">
                <h3>Daño de</h3>
                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                ${resp.damage_relations.double_damage_from.map((item) => item.name).join(', ')}.
                <hr>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                ${resp.damage_relations.half_damage_from.map((item) => item.name).join(', ')}.
                ${resp.damage_relations.no_damage_to.length > 0
              ? `
                    <hr>
                    <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 5%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    ${resp.damage_relations.no_damage_to.map((item) => item.name).join(', ')}`
              : ''
            }
            </div>
          </div>
          `,
          confirmButtonText: 'Cerrar'
        });
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  showAllMoves() {
    Swal.fire({
      title: 'Movimientos',
      width: 800,
      html: `
      <div style="text-align: left;">
        <ul class="list-moves">
          ${this.pokemonDetail?.moves.map((item) => `<li>${item.move.name}</li>`).join('')}
        </ul>
      </div>
      `,
      confirmButtonText: 'Cerrar'
    });
  }

}
