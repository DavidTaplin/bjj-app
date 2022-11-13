import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoveComponent } from './add-move/add-move.component';
import { CompetitorComponent } from './competitor/competitor.component';
import { ProfessorComponent } from './professor/professor.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'competitor', component: CompetitorComponent },
  { path: 'add-move', component: AddMoveComponent},
  { path: 'professor', component: ProfessorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
