import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NomeDoComponenteComponent } from './nome-do-componente/nome-do-componente.component';

const routes: Routes = [
  { path: 'buscar-personagem', component: NomeDoComponenteComponent },
  { path: '', redirectTo: '/buscar-personagem', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
