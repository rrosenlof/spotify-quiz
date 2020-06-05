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
      this.playlist = response.tracks.items;
      this.playlistLength = response.tracks.items.length;
      console.log(response.tracks.items.length)
    });
  }
}
