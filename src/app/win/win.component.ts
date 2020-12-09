import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent implements OnInit {
  message: string;

  constructor() { }

  ngOnInit(): void {
    this.message = "You won!"
  }

}
