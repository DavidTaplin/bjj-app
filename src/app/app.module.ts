import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AddMoveComponent } from './add-move/add-move.component';
import { ProfessorComponent } from './professor/professor.component';
import { CompetitorComponent } from './competitor/competitor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddMoveComponent,
    ProfessorComponent,
    CompetitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
