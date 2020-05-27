import { Component } from '@angular/core';
const NUM_Q: number = 10;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify-years-quiz';
  playlistLength = 3;
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
}
