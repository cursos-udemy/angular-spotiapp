import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent implements OnInit {
  public artists: any[] = [];
  public loading: boolean;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {}

  buscarArtista(search: string) {
    this.loading = true;

    this.spotifyService.searchArtist(search).subscribe(response => {
      this.loading = false;
      this.artists = response;
    });
    
  }
}
