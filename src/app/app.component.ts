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
  albums = [];
  currentAlbum: any = {};
  tracks = [];

  playlist = [];

  currentAlbumTracks(id) {
    this.albumService.getAlbumTracks(id).subscribe((response: any) => {
      const {items} = response;
      this.tracks = items;
    });
  }

  onAlbumChange(album: any){
    const {id} = album;
    this.currentAlbum = album;
    this.currentAlbumTracks(id);
  }

  ngOnInit() {
    // this.albumService.getAlbums().subscribe((response: any) => {
    //   const {albums} = response;
    //   const {items} = albums;
    //   this.currentAlbum = items[0];
    //   this.albums = items;
    //   this.currentAlbumTracks(this.currentAlbum.id);
    // });
    this.albumService.getPlaylist().subscribe((response: any) => {
      this.playlist = response.tracks.items;
    });
  }
}
