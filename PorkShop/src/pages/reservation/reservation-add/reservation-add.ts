import { Component } from '@angular/core';
import {IonicPage} from "ionic-angular";
import { IReservation } from '../../../models/interfaces/IReservation';
import { ReservationService } from '../../../services/ReservationService';

@IonicPage()
@Component({
  selector: 'reservation-add',
  templateUrl: 'reservation-add.html'
})
export class ReservationAdd {

  constructor(private reservationService: ReservationService)
  {}

  public m_Reservation: IReservation = <IReservation>{
    TableID: "",
    ReservationDate: "",
    ReservationName: "",
    ReservationPhoneNumber: "",
    ReservationTime: ""
  };

  public async AddReservation(): Promise<any>
  {
    try
    {
      return await this.reservationService.AddReservation(this.m_Reservation);
    }
    catch(addReservationError)
    {
      return Promise.reject(addReservationError);
    }
  }
}
