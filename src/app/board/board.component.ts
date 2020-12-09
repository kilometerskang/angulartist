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
  gameOver: boolean;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = ["color-1", "color-2", "color-3", "color-4",
      "color-5", "color-6", "color-7"];
    this.selectMode = true;
    this.shuffleSquares();
  }

  shuffleSquares() {
    for (let i = 0; i < this.squares.length; i++) {
      let j = Math.floor(Math.random() * this.squares.length - i) + i;
      let tmp = this.squares[i];
      this.squares[i] = this.squares[j];
      this.squares[j] = tmp;
    }
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

    // Check if all are sorted.
    this.checkWin();
  }

  checkWin() {
    let tmp = true;
    for (let i = 0; i < this.squares.length; i++) {
      if (this.squares[i] !== `color-${i + 1}`) {
        tmp = false;
      }
    }
    if (tmp === true) {
      this.gameOver = true;
    }
  }
}
