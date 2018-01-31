import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

import {ICacheData} from "../models/interfaces/ICacheData";
import {CacheKeys} from "../models/enums/CacheKeys";

@Injectable()
export class CacheService
{
  public AppCache: Storage;

  constructor(private storage: Storage)
  {
    this.AppCache = this.storage;
  }

  public async Get(keyP: CacheKeys): Promise<any>
  {
    try
    {
        let cache_result = await this.AppCache.get(keyP.toString());
        return Promise.resolve(cache_result.Data);
    }
    catch(getFromCacheError)
    {
        return Promise.reject(getFromCacheError);
    }
  }

  public async Save(keyP: CacheKeys, dataP: any): Promise<any>
  {
    const new_cache_data = <ICacheData>{
      Data: dataP,
      CacheTime: new Date(Date.now()).toString(),
    };
    let cache_set_result;
    try
    {
      cache_set_result = await this.AppCache.set(keyP.toString(), JSON.stringify(new_cache_data));
      return Promise.resolve(cache_set_result);
    }
    catch(cacheSetError)
    {
      return Promise.reject(cacheSetError);
    }
  }
}
