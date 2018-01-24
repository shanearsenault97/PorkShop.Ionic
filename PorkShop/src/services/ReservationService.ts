import {Injectable} from "@angular/core";
import { IReservation } from "../models/interfaces/IReservation";
import { BaseGUIDService } from "./BaseGUIDService";
import { CacheKeys } from "../models/enums/CacheKeys";

@Injectable()
export class ReservationService
{
  constructor(private baseGUIDService: BaseGUIDService)
  {}

  private m_ReservationCacheKey = CacheKeys.Reservations;

  public async AddReservation(newReservationP: IReservation): Promise<IReservation>
  {
    try
    {
        let save_result = await this.baseGUIDService.SaveGUIDItem(newReservationP, this.m_ReservationCacheKey);
        return Promise.resolve(save_result);
    }
    catch(saveNewReservationError)
    {
        return Promise.reject(saveNewReservationError);
    }
  }
}