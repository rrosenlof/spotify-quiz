import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() track;
  @Output() trackSelected = new EventEmitter<Object>();
  
  trackCover: {};

  ngOnInit(): void {
    // const {images} = this.track;
    // const [, image] = images;
    // this.trackCover = {background: `linear-gradient(0deg, #989494, #aba6a6), url(${image.url}), no-repeat`}

  }


  getArtiste(track) {
    const {artists} = track;
    const [artist] = artists;
    return artist;
  }

  onTrackClick(e) {
    this.trackSelected.emit(this.track);
  }

}
