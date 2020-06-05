import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewChildren } from '@angular/core';
import { SpotifyService } from '../services/spotify.services';
import { Observable } from 'rxjs';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input() yearRange;
  @Input() limit: number;
  @Input() tracks;

  pager = { page: 0 }
  score = 0;
  answers: any[] = [];
  answer: [];

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  onAnswered(answer: number[]) {
    this.score += answer[1];
    this.pager.page += 1;
    this.answers.push(answer);
  }

  check(page, length){
    if (page == length) {
      return true;
    }
  }

}
