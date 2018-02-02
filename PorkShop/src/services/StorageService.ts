import {CacheKeys} from "../models/enums/CacheKeys";
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable()
export class StorageService
{
  public m_Storage: Storage;
  private m_StorageReady: Promise<any>;

  constructor(public storage: Storage)
  {
    this.m_StorageReady = this.storage.ready().then(() => {
      this.m_Storage = this.storage;
    }).catch(() => {});
  }

  public async Get(keyP: CacheKeys): Promise<any>
  {
    try
    {
      await this.m_StorageReady;
      let cache_result = await this.m_Storage.get(keyP.toString());
      return Promise.resolve(JSON.parse(cache_result.Data));
    }
    catch (getFromCacheError)
    {
      return Promise.reject(getFromCacheError);
    }
  }

  public async Save(keyP: CacheKeys, dataP: any): Promise<any>
  {
    try
    {
      await this.m_StorageReady;
      await this.m_Storage.set(keyP.toString(), JSON.stringify(dataP));
      return dataP;
    }
    catch (cacheSetError)
    {
      return Promise.reject(cacheSetError);
    }
  }
}
