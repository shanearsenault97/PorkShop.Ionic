import { Component } from '@angular/core';
import {PageNames} from "../models/enums/PageNames";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PageNames.HomePage;

  constructor() {}
}

