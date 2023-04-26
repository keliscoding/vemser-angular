import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ForumComponent } from './pages/forum/forum.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'forum', component: ForumComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
