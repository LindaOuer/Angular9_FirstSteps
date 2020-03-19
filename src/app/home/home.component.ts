import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  brews: Object;

  constructor(private _http:HttpService) { }

  // Whatever is written within ngOnInit runs when the component is loaded
  ngOnInit() {
    this._http.myMethod();
    this._http.getBeer().subscribe(
      data => {
        this.brews = data
        console.log(this.brews);
      }
    )
  }

}
