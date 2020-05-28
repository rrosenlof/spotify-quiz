import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() album: { images: Array<any> };
  @Output() albumSelected = new EventEmitter<Object>();
  albumCover: {};

  ngOnInit(): void {
    const {images} = this.album;
    const [, image] = images;
    this.albumCover = {background: `linear-gradient(0deg, #989494, #aba6a6), url(${image.url}), no-repeat`}

  }


  getArtiste(album) {
    const {artists} = album;
    const [artist] = artists;
    return artist;
  }

  onAlbumClick(e) {
    this.albumSelected.emit(this.album);
  }

}
