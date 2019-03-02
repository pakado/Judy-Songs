import { Component, OnInit } from '@angular/core';
import {SongsService} from "../songsService";

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  songs: any[];
  constructor(private songsService: SongsService) { }

  ngOnInit() {
    return this.songsService.getSongs()
      .subscribe(
        (songs: any) => {
          this.songs = songs;
        },
        (error) => console.log(error)
      );
  }

}
