import {CacheKeys} from "../../src/models/enums/CacheKeys";
export class FakeStorageService
{
  constructor()
  {}

  private m_Data = null;

  public async Get(keyP: CacheKeys): Promise<any>
  {
    return this.m_Data;
  }

  public async Save(keyP: CacheKeys, dataP: any): Promise<any>
  {
    return dataP;
  }

  /*Helper methods not in original class*/

  public SetStorageToHaveValue()
  {
    this.m_Data = {FirstName: 'Clark', LastName: 'Kent', Alias: 'Superman'};
  }
}
