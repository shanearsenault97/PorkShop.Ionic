import { Component, OnInit } from '@angular/core';
import {IonicPage} from "ionic-angular";
import { IReservation } from '../../../models/interfaces/IReservation';

@IonicPage()
@Component({
  selector: 'reservation-add',
  templateUrl: 'reservation-add.html'
})
export class ReservationAdd implements OnInit {

  constructor() {

  }

  public m_Reservation: IReservation;

  ngOnInit()
  {
    this.m_Reservation = <IReservation>{
      TableID: "",
      ReservationDate: "",
      ReservationName: "",
      ReservationPhoneNumber: "",
      ReservationTime: ""
    };
  }

}
