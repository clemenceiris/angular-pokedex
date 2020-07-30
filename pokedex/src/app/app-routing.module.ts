import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';

const routes: Routes = [
    {
      path:'pokemon/:id',
      component:PokemonComponent
    },

    {
      path:'pokedex-list',
      component:PokedexListComponent
    },

    {
      path:"",
      redirectTo:"/pokedex-list",
      pathMatch:"full"
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
