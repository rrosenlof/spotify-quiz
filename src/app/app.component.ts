import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './services/playlist.service';
const NUM_Q: number = 10;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spotify-years-quiz';

  constructor(private playlistService: PlaylistService) {}
  
  playlist = [];
  playlistLength: number = 0;

  ngOnInit() {
    this.playlistService.getPlaylist().subscribe((response: any) => {
      console.log(response)
      this.playlist = response.items;
      this.playlistLength = response.items.length;
    });
  }
}
