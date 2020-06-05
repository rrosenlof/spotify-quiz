import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }
  
  get headers() {
    return new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${environment.spotifySecret}`})
  }

  getPlaylist() {
    return this.http.get(`https://api.spotify.com/v1/playlists/${environment.playlistId}`, {
      headers: this.headers
    });
  }
}
