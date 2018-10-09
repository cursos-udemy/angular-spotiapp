import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styles: []
})
export class ArtistComponent implements OnInit {
  public artist: any = {};
  public loading: boolean;
  public topTracks: any[] = [];

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {

    this.router.params.subscribe(params => {
      this.getArtist(params["id"]);
      this.getTopTracks(params["id"]);
    });
  }

  ngOnInit() {}

  public getArtist(id: string) {
    this.loading = true;
    this.spotifyService.getArtist(id).subscribe(art => {
      this.artist = art;
      this.loading = false;
    });
  }

  public getTopTracks(id:string) { 
    this.loading = true;
    this.spotifyService.getTopTracks(id).subscribe (tracks => {
      this.topTracks = tracks;
      console.log(tracks);
      
      this.loading = false;
    });
  }
}
