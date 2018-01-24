import {Injectable} from "@angular/core";
import {App, NavController} from "ionic-angular";
import {Page} from "ionic-angular/navigation/nav-util";

@Injectable()
export class NavigationService
{
  constructor(app: App)
  {
    this.m_NavController = app.getActiveNavs()[0];
  }

  private m_NavController: NavController;

  public PushView(pageNameP: Page | string, navParamsP?: {})
  {
    return this.m_NavController.push(pageNameP, navParamsP);
  }
}
