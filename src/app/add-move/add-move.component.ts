import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-move',
  templateUrl: './add-move.component.html',
  styleUrls: ['./add-move.component.css']
})
export class AddMoveComponent implements OnInit {






  constructor() {}

  public name: string;
  public position: string;
  public type: string;
  addMove() {
    console.log(this.name),
  console.log(this.position),
console.log(this.type)  }


  ngOnInit(): void {
  }

}
