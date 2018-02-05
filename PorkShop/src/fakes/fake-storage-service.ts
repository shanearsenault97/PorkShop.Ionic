import {CacheKeys} from "../models/enums/CacheKeys";
export class FakeStorageService
{
  constructor()
  {}

  private m_Data = null;
  private m_StorageServiceUnavailable;

  public async Get(keyP: CacheKeys): Promise<any>
  {
    if(this.m_StorageServiceUnavailable)
    {
      return;
    }
    return this.m_Data;
  }

  public async Save(keyP: CacheKeys, dataP: any): Promise<any>
  {
    if(this.m_StorageServiceUnavailable)
    {
      return;
    }
    return dataP;
  }
  /*Helper methods not in original class*/

  public SetStorageToHaveValue()
  {
    this.m_Data = {FirstName: 'Clark', LastName: 'Kent', Alias: 'Superman'};
  }

  public SetStorageServiceAsUnavailable()
  {
    this.m_StorageServiceUnavailable = true;
  }
}
