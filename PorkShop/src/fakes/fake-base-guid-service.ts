import {IItem} from "../models/interfaces/IItem";
import {CacheKeys} from "../models/enums/CacheKeys";
export class FakeBaseGuidService
{
  constructor()
  {}

  private m_ServiceIsUnvailable: boolean;

  public async SaveGUIDItem(newItemP: IItem, cacheKeyP: CacheKeys): Promise<any>
  {
    if(this.m_ServiceIsUnvailable)
    {
      return null;
    }
    return newItemP;
  }

  /*Helper methods not in original class*/
  public SetServiceToUnavailable()
  {
    this.m_ServiceIsUnvailable = true;
  }
}

