import {CacheKeys} from "../models/enums/CacheKeys";
export class FakeStorageService
{
  constructor()
  {}

  private m_Data: string = "";
  private m_StorageServiceUnavailable;

  public async Get(keyP: CacheKeys): Promise<any>
  {
    if(this.m_StorageServiceUnavailable)
    {
      return Promise.reject(null);
    }
    return Promise.resolve(JSON.parse(this.m_Data));
  }

  /*Helper methods not in original class*/

  public SetStorageToHaveValue()
  {
    this.m_Data = "{FirstName: 'Clark', LastName: 'Kent', Alias: 'Superman'}";
  }

  public SetStorageServiceAsUnavailable()
  {
    this.m_StorageServiceUnavailable = true;
  }
}
