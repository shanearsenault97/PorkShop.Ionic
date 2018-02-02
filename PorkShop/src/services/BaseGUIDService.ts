import {Injectable} from "@angular/core";
import { IReservation } from "../models/interfaces/IReservation";
import { IItem } from "../models/interfaces/IItem";
import { UUIDService } from "./UUIDService";
import { CacheService } from "./CacheService";
import {CacheKeys} from "../models/enums/CacheKeys";

@Injectable()
export class BaseGUIDService
{
  constructor(private cacheService: CacheService,
              private uuidService: UUIDService)
  {}

  public async GetGUIDItems(cacheKeyP: CacheKeys): Promise<any>
  {
    try
    {
        let cache_result = await this.GetGUIDItemsFromCache(cacheKeyP);
        if(!cache_result)
        {
            cache_result = [];
        }
        return Promise.resolve(cache_result);
    }
    catch(getCacheItemsError)
    {
        return Promise.reject(getCacheItemsError);
    }
  }

  public async SaveGUIDItem(newItemP: IItem, cacheKeyP: CacheKeys): Promise<any>
  {
    newItemP.ID = await this.uuidService.Generate();
    try
    {
        let cache_result = await this.SaveGUIDItemToCache(newItemP, cacheKeyP);
        return Promise.resolve(cache_result);
    }
    catch(saveGuidItemError)
    {
        return Promise.reject(saveGuidItemError);
    }
  }

  private async GetGUIDItemsFromCache(cacheKeyP: CacheKeys): Promise<any>
  {
    try
    {
        let cache_result = await this.cacheService.Get(cacheKeyP);
        return Promise.resolve(cache_result.Data);
    }
    catch(getItemsFromCacheError)
    {
        return Promise.reject(getItemsFromCacheError);
    }
  }

  private async SaveGUIDItemToCache(newItemP: IItem, cacheKeyP: CacheKeys): Promise<any>
  {
    try
    {
        let item_list = await this.GetGUIDItems(cacheKeyP);
        item_list.push(newItemP);
        await this.cacheService.Save(cacheKeyP, item_list);
        return Promise.resolve(newItemP);
    }
    catch(getItemsErrorResult)
    {
        return Promise.reject(getItemsErrorResult);
    }
  }
}
