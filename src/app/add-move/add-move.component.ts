import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-move',
  templateUrl: './add-move.component.html',
  styleUrls: ['./add-move.component.css']
})
export class AddMoveComponent implements OnInit {






  constructor() {}

  addMove() {
    console.log('i was clicked')  }


  ngOnInit(): void {
  }

}
