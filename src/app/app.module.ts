import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyService } from './services/spotify.services';
import { PlaylistService } from './services/playlist.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    ResultsComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [SpotifyService, PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
