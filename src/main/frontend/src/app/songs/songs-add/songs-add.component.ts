import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs-add',
  templateUrl: './songs-add.component.html',
  styleUrls: ['./songs-add.component.css']
})
export class SongsAddComponent implements OnInit {

  private main:string;
  constructor() { }

  ngOnInit() {
  this.main = "pakado";
  }

}
