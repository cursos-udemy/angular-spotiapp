import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: []
})
export class CardsComponent implements OnInit {
  @Input()
  items: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  verArtista(item: any) {
    let artistId: string = "";
    if (item.type === "artist") {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this.router.navigate(["artist", artistId]);
  }
}
