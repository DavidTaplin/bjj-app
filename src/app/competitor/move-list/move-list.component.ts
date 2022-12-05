import { Component, OnInit } from '@angular/core';
import { Move } from 'src/app/shared/move/move.model';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.css']
})
export class MoveListComponent implements OnInit {

 public moveList = [
  {
    name: 'Kimura'
  }
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
