import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  searchFG: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.searchFG = this.formBuilder.group({
      search: ['']
    });
  }

  searchPokemon(){
    this.router.navigate([`/pokemon/detail/${this.searchFG.value.search.toLowerCase()}`]);
    this.searchFG.reset();
  }

}
