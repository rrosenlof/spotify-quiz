import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SpotifyService } from '../services/spotify.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() playlist: [] = [];
  @Input() playlistLength: number;
  @Input() years;

  pager = { page: 0, end: this.playlistLength }
  score = 0;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
    
  }

  onAnswered(score: number) {
    this.score += score;
    this.pager.page += 1;
    console.log(this.pager)
  }
}
