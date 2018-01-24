import {Injectable} from "@angular/core";
import {UUID} from "angular2-uuid";

@Injectable()
export class UUIDService
{
  public Generate(): string
  {
    return UUID.UUID();
  }
}
