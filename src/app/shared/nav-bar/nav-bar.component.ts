import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() currentPage = new EventEmitter<string>();
  collapsed: boolean = true;
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSelectPage(page: string) {

    this.currentPage.emit(page);
  }
}


