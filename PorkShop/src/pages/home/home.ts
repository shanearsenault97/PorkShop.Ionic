import { Component } from '@angular/core';
import {NavigationService} from "../../services/NavigationService";
import {ReservationAdd} from "../reservation/reservation-add/reservation-add";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navigationService: NavigationService)
  {}

  public GoToReservation()
  {
    return this.navigationService.PushView(ReservationAdd)
  }

}
