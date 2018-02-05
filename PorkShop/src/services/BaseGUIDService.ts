import {Injectable} from "@angular/core";
import { IItem } from "../models/interfaces/IItem";
import { UUIDService } from "./UUIDService";
import { StorageService } from "./StorageService";
import {CacheKeys} from "../models/enums/CacheKeys";

@Injectable()
export class BaseGUIDService
{
  constructor(private storageService: StorageService,
              private uuidService: UUIDService)
  {}

  public async GetGUIDItems(cacheKeyP: CacheKeys): Promise<any>
  {
    return await this.GetGUIDItemsFromCache(cacheKeyP);
  }

  public async SaveGUIDItem(newItemP: IItem, cacheKeyP: CacheKeys): Promise<any>
  {
    newItemP.ID = await this.uuidService.Generate();
    newItemP.DateAdded = new Date().getTime();

    return await this.SaveGUIDItemToCache(newItemP, cacheKeyP);
  }

  private async GetGUIDItemsFromCache(cacheKeyP: CacheKeys): Promise<any>
  {
    return await this.storageService.Get(cacheKeyP);
  }

  private async SaveGUIDItemToCache(newItemP: IItem, cacheKeyP: CacheKeys): Promise<any>
  {
    let item_list: IItem[] = await this.GetGUIDItems(cacheKeyP);
    if(!item_list)
    {
      item_list = [];
    }
    item_list.push(newItemP);
    await this.storageService.Save(cacheKeyP, item_list);
    return newItemP;
  }
}
