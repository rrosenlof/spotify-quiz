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
  years = [];
  trackNums = [];
  tracks = [];

  // Hardcoded values:
  limit: number = 10;
  yearRange = [1995, 2005, 2000];

  ngOnInit() {
    this.playlistService.getPlaylist().subscribe((response: any) => {
      this.playlist = response.items;
      this.playlistLength = response.total;
      this.getRandomOffsets();
      for (var i = 0; i < this.limit; i++){
        this.playlistService.getPlaylistTrack(this.trackNums[i]).subscribe((response: any) => {
          this.tracks.push(response.items[0].track);
        });
      }
    });
  }

  getRandomOffsets() {
    while (this.trackNums.length < this.limit) {
      var num = this.trackNums.push(Math.floor(Math.random()*this.playlistLength));
      if(this.trackNums.indexOf(num) === -1) this.trackNums.push(num);
    }
  }
}
