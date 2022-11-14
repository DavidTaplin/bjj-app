import { Component, OnInit } from '@angular/core';
import { Move } from './move.model';
@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
  }

}
const MOVES = Move[
  {name: 'triangle choke', position: 'guard', type: 'submission'}
]
