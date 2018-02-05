import {IItem} from "../models/interfaces/IItem";
import {CacheKeys} from "../models/enums/CacheKeys";
export class FakeBaseGuidService
{
  constructor()
  {}

  public async SaveGUIDItem(newItemP: IItem, cacheKeyP: CacheKeys): Promise<any>
  {
    return newItemP;
  }
}

