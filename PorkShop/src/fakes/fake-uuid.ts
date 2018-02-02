export class FakeUUID
{
  constructor()
  {}

  private m_GeneratedUUID: string;

  public UUID()
  {
    return this.m_GeneratedUUID;
  }

  public SetFakeUUID(fakeUUIDP: string)
  {
    this.m_GeneratedUUID = fakeUUIDP;
  }
}
