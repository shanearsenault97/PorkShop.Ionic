export class FakeStorage
{
  constructor()
  {}

  private m_StorageUnavailable: boolean = false;
  private m_StoredData: string = `{"FirstName": "Clark", "LastName": "Kent", "Alias": "Superman"}`;

  public ready(): Promise<void>
  {
    return Promise.resolve();
  }

  public get(key: string): Promise<any>
  {
    if(this.m_StorageUnavailable)
    {
      return;
    }
    return Promise.resolve(this.m_StoredData);
  }

  public set(key: string, value: any): Promise<any>
  {
    return;
  }

  /*Helper methods not declared within normal class*/
  public SetStorageToUnavailable()
  {
    this.m_StorageUnavailable = true;
  }
}
