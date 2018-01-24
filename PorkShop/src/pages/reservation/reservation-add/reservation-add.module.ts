import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";

import {ReservationAdd} from "./reservation-add";

@NgModule({
  declarations: [ReservationAdd],
  imports: [IonicPageModule.forChild(ReservationAdd)]
})

export class ReservationAddModule{}
