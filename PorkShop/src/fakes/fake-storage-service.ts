import {CacheKeys} from "../models/enums/CacheKeys";
export class FakeStorageService
{
  constructor()
  {}

  private m_Data: string = "";

  public async Get(keyP: CacheKeys): Promise<any>
  {
    return Promise.resolve(JSON.parse(this.m_Data));
  }

  public SetStorageToHaveValue()
  {
    this.m_Data = "{FirstName: 'Clark', LastName: 'Kent', Alias: 'Superman'}";
  }
}
