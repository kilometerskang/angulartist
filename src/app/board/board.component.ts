import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: string[];
  selectMode: boolean;
  lastI: number;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = ["color-1", "color-2", "color-3", "color-4", "color-5"];
    this.selectMode = true;
  }

  makeMove(i: number) {
    if (this.selectMode) {
      // Select color.
      this.lastI = i;
    }
    else {
      // Swap square classes (colors).
      let tmp = this.squares[i];
      this.squares.splice(i, 1, this.squares[this.lastI]);
      this.squares.splice(this.lastI, 1, tmp);
    }
    this.selectMode = !this.selectMode;
  }

}
