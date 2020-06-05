import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Question } from '../models/question';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  @Output() trackSelected = new EventEmitter<Object>();
  @Output() answer: EventEmitter<number[]> = new EventEmitter();

  @Input() index: number;
  @Input() yearRange;
  @Input() limit: number;
  @Input() track;

  didAnswer = false;
  answers: any[] = [];
  spotifySrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    
   }

  ngOnInit() {
    this.spotifySrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/track/".concat(this.track.id));
  }

  onSubmit(input: number, answer: string) {
    let year = this.formatDate(answer);
    let score = this.checkAnswer(input, year);
    let ansArray = new Array();
    ansArray[0] = input;
    ansArray[1] = score;
    this.answer.emit(ansArray);
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
