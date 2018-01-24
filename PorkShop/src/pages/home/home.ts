import { Component } from '@angular/core';
import {NavigationService} from "../../services/NavigationService";
import {IonicPage} from "ionic-angular";
import {PageNames} from "../../models/enums/PageNames";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor()
  {}

  public ReservationAdd = PageNames.ReservationAdd;

}
