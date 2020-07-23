import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokedexListComponent} from './pokedex-list/pokedex-list.component';

const routes: Routes = [
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
