import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BJJ Coach';

  pageDisplayed = "Home"

onNavigatePage(page: string) {

    this.pageDisplayed = page;


} }
