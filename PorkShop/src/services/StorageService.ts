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
    await this.m_StorageReady;
    const storage_result = await this.m_Storage.get(keyP.toString());
    let decoded_result = null;

    if(storage_result)
    {
      decoded_result = JSON.parse(storage_result);
    }

    return decoded_result;
  }

  public async Save(keyP: CacheKeys, dataP: any): Promise<any>
  {
    await this.m_StorageReady;
    await this.m_Storage.set(keyP.toString(), JSON.stringify(dataP));
    return dataP;
  }
}
