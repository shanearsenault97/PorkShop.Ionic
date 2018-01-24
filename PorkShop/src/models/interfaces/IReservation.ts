import {IItem} from "./IItem";
export interface IReservation extends IItem
{
  TableID: string,
  ReservationDate: string,
  ReservationTime: string,
  ReservationName: string,
  ReservationPhoneNumber: string
}
