import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SpotifyService } from '../services/spotify.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() albums: [] = [];
  @Output() albumSelected = new EventEmitter<object>();
  @Input() playlist: [] = [];
  // @Output() albumSelected = new EventEmitter<object>();
  onAlbumSelected(album) {
    this.albumSelected.emit(album);
  }

  questions = [
    {
      id: 1,
      song: 'Bye Bye Bye',
      artist: 'Backstreet Boys',
      year: 1998
    },
    {
      id: 2,
      song: 'Yoo',
      artist: 'Kelly Clarkson',
      year: 2003
    },
    {
      id: 3,
      song: 'Who let the dogs out?',
      artist: 'Baha Men',
      year: 2000
    },
  ]
  playlistLength = this.playlist.length;
  pager = 
    {
      page: 0,
      end: this.playlistLength
    }
  

  score = 0;
  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit(): void {
    
  }

  onAnswered(score: number) {
    this.score += score;
    this.pager.page += 1;
  }

}
