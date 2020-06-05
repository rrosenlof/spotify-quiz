import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() index: number;
  @Output() score: EventEmitter<number> = new EventEmitter();
  @Input() track;
  @Output() trackSelected = new EventEmitter<Object>();
  @Input() playlistLength: number;
  didAnswer = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(input, answer) {
    let score = this.checkAnswer(input, answer);
    this.score.emit(score);
    this.didAnswer = true;
  }

  checkAnswer(input, answer) {
    return Math.abs(input-answer);
  }

}
