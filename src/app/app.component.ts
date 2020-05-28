import { Component, OnInit } from '@angular/core';
import { AlbumService } from './services/album.service';
const NUM_Q: number = 10;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spotify-years-quiz';

  constructor(private albumService: AlbumService) {}
  
  playlist = [];

  ngOnInit() {
    this.albumService.getPlaylist().subscribe((response: any) => {
      this.playlist = response.tracks.items;
    });
  }
}
