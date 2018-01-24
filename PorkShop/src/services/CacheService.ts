import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

import {ICacheData} from "../models/interfaces/ICacheData";

@Injectable()
export class CacheService
{
  public AppCache: Storage;

  constructor(private storage: Storage)
  {
    this.AppCache = this.storage;
  }

  public async Get(keyP: string): Promise<any>
  {
    try
    {
        let cache_result = await this.AppCache.get(keyP);
        return Promise.resolve(cache_result);    
    }
    catch(getFromCacheError)
    {
        return Promise.reject(getFromCacheError);
    }
  }

  public Save(keyP: string, dataP: any)
  {
    const new_cache_data = <ICacheData>{
      Data: dataP,
      CacheTime: new Date(Date.now()).toString(),
    };
    return this.AppCache.set(keyP, JSON.stringify(new_cache_data));
  }
}