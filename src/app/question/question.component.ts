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
  @Input() track: any;
  @Output() trackSelected = new EventEmitter<Object>();
  @Input() playlistLength: number;
  @Input() years;
  didAnswer = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.years);
  }

  onSubmit(input: number, answer: string) {
    console.log(input, answer);
    let year = this.formatDate(answer);
    let score = this.checkAnswer(input, year);
    this.score.emit(score);
    this.didAnswer = true;
  }

  checkAnswer(input: number, answer: number) {
    return Math.abs(input-answer);
  }

  formatDate(date: string) {
    date = date.substr(0,4);
    var year = Number(date);
    return year;
  }



}
