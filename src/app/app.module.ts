import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AddMoveComponent } from './add-move/add-move.component';
import { ProfessorComponent } from './professor/professor.component';
import { CompetitorComponent } from './competitor/competitor.component';
import { FormsModule } from '@angular/forms';
import { MoveComponent } from './shared/move/move.component';
import { MoveDetailsComponent } from './competitor/move-details/move-details.component';
import { MoveListComponent } from './competitor/move-list/move-list.component';
import { MoveSearchComponent } from './professor/move-search/move-search.component';
import { MoveResultsComponent } from './professor/move-results/move-results.component';
import { HomeComponent } from './home/home.component';
import { MovesComponent } from './competitor/moves/moves.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddMoveComponent,
    ProfessorComponent,
    CompetitorComponent,
    MoveComponent,
    MoveDetailsComponent,
    MoveListComponent,
    MoveSearchComponent,
    MoveResultsComponent,
    HomeComponent,
    MovesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
