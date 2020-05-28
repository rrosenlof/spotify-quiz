import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
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
  playlistLength = this.questions.length;
  pager = 
    {
      page: 0,
      end: this.playlistLength
    }
  

  score = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onAnswered(score: number) {
    this.score += score;
    this.pager.page += 1;
  }

}
