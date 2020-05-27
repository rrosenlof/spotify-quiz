import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  @Input() question;
  @Input() index: number;
  @Input() playlistLength: number;
  sumScores: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(input, answer) {
    let score = this.checkAnswer(input, answer);
    this.sumScores += score;
    return alert(score);
  }

  checkAnswer(input, answer) {
    return Math.abs(input-answer);
  }

}
