import {IReservation} from "../models/interfaces/IReservation";
export class FakeReservationService
{
  constructor()
  {}

  private m_Reservation: IReservation;
  private m_ReservationServiceUnavailable: boolean;

  public async AddReservation(newReservationP: IReservation): Promise<IReservation>
  {
    if(this.m_ReservationServiceUnavailable)
    {
      return Promise.reject(null);
    }
    return this.m_Reservation;
  }

    /*Helper Methods not in class*/

  public SetReservationModel()
  {
    this.m_Reservation = <IReservation>{
      TableID: "",
      ReservationDate: "",
      ReservationName: "",
      ReservationPhoneNumber: "",
      ReservationTime: ""
    };
  }

  public SetReservationServiceToUnavailable()
  {
    this.m_ReservationServiceUnavailable = true;
  }
}
