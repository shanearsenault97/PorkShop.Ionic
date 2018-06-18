import {IItem} from "../../src/models/interfaces/IItem";
import {CacheKeys} from "../../src/models/enums/CacheKeys";
export class FakeBaseGuidService
{
  constructor()
  {}

  public async SaveGUIDItem(newItemP: IItem, cacheKeyP: CacheKeys): Promise<any>
  {
    return newItemP;
  }
}

