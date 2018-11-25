import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Spotify Service [OK]");
  }

  private getQuery(query: string) {
    const URL: string = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': "Bearer BQARW6OaHwUHix4jAsBYY-83Uu9KsChGT5BH3zkqK2vx4zIiZ5Rij1ykTOew4BGC17M_y44exzUP_iWzzAg"
    });

    return this.http.get(URL, { headers });
  }

  public getNewReleases() {
    return this.getQuery("browse/new-releases?country=AR")
      .pipe(map(data => data["albums"].items));
  }

  public searchArtist(text: string) {
    return this.getQuery(`search?type=artist&q=${text}`)
      .pipe(map(data => data["artists"].items));
  }

  public getArtist(id:string) {
    return this.getQuery(`artists/${id}`);
  }

  public getTopTracks(artistID:string) {
    return this.getQuery(`artists/${artistID}/top-tracks?country=AR`)
    .pipe(map(data => data['tracks']));
  }
}
