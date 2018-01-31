import { Component, OnInit } from '@angular/core';
import {IonicPage} from "ionic-angular";
import { IReservation } from '../../../models/interfaces/IReservation';
import { ReservationService } from '../../../services/ReservationService';

@IonicPage()
@Component({
  selector: 'reservation-add',
  templateUrl: 'reservation-add.html'
})
export class ReservationAdd implements OnInit {

  constructor(private reservationService: ReservationService) {

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

  public async AddReservation(): Promise<any>
  {
    try
    {
      let new_reservation = await this.reservationService.AddReservation(this.m_Reservation);
      return Promise.resolve(new_reservation);
    }
    catch(addReservationError)
    {
      return Promise.reject(addReservationError);
    }
  }

}
