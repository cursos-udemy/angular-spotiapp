import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  public newReleases: any[] = [];
  public loading: boolean;
  public existError: boolean;
  public messageError: string;

  constructor(private spotifyService: SpotifyService) {
    // inicializo variables
    this.loading = true;
    this.existError = false;
    this.messageError = "";

    // busco las nuevos lanzamientos disponibles en argentina.
    this.spotifyService.getNewReleases().subscribe(
      response => {
        this.newReleases = response;
        this.loading = false;
      },
      serviceError => {
        this.loading = false;
        this.existError = true;
        this.messageError = serviceError.error.error.message;
      }
    );
  }

  ngOnInit() {}
}
