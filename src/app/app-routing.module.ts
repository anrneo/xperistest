import { ConsultaComponent } from './consulta/consulta.component';
import { EntrevistaComponent } from './entrevista/entrevista.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entrevista/:id', component: EntrevistaComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: '**', component: HomeComponent}
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
