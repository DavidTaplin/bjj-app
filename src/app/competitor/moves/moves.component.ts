import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {
  public moves = [
    {
      name: "kamura",
      position: "closed guard",
      type: "submission",
    },
    {
      name: "scissor sweep",
      position: "closed guard",
      type: "sweep"
    },
    {
      name: "double leg",
      position: "standing",
      type: "take down"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
