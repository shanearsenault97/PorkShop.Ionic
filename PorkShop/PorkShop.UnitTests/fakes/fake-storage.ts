export class FakeStorage
{
  constructor()
  {}

  private m_StoredData: string = `{"FirstName": "Clark", "LastName": "Kent", "Alias": "Superman"}`;

  public ready(): Promise<void>
  {
    return Promise.resolve();
  }

  public get(key: string): Promise<any>
  {
    return Promise.resolve(this.m_StoredData);
  }

  public set(key: string, value: any): Promise<any>
  {
    return;
  }
}
