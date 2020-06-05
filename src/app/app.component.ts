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

  ngOnInit() {
    this.playlistService.getPlaylist().subscribe((response: any) => {
      this.playlist = response.items;
      this.playlistLength = response.items.length;
      this.years = this.findRange(this.playlist);
    });
    
  }

  findRange(playlist) {
    console.log(playlist);
    let allYears = [];
    let years = [];
    for (let i =0; i<playlist.length; i++) {
      let year = playlist[i].track.album.release_date.substr(0,4);
      allYears.push(year);
    }
    const min = Math.min.apply(null, allYears);
    const max = Math.max.apply(null, allYears);
    years.push(min-5);
    years.push(max);
    const start = Math.floor((min + max)/2);
    years.push(start);
    return years;
  }
}
