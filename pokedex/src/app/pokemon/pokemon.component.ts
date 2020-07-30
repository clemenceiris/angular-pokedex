import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon : any;
  id: Number;
  pokemonName = "";

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get("id")
  	this.requestSinglePokemon().subscribe((pokemon : any) => {
  	this.pokemon = pokemon
  	 });
  }

  requestSinglePokemon() {
  	return this.http.get("https://pokeapi.co/api/v2/pokemon/"+ this.id)
  }

}
