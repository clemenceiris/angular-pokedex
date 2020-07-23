import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit {

  currentPokemons = [];
  pokemons = [];
  pokemonName = "";
  name = new FormControl('');
  

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
  
    this.name.valueChanges.subscribe (search => this.currentPokemons = this.searchPokemon(this.pokemons, search));
  
    this.requestAllPokemon().subscribe((pokemons : any) => {
    pokemons.results.forEach(pokemon => {
    this.pokemons.push(pokemon);
    });
  
    this.currentPokemons = this.pokemons
    })
  }
  
  extractId(url) {
    url = url.split(/\//)[6];
    return (url);
  }
  
  requestAllPokemon() {
    return this.http.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
  }
  
  
  searchPokemon(list, search){
  
  let result = [];
  
  for (const pokemon of list){
  
    if
      (pokemon.name.includes(search)){
      result.push(pokemon)
      }
  }
   
  return result;

  }
  
}
