import {ReservationAdd} from "./reservation-add";
import {FakeReservationService} from "../../../fakes/fake-reservation-service";
import {TestBed} from "@angular/core/testing";
import {ReservationService} from "../../../services/ReservationService";
import {IReservation} from "../../../models/interfaces/IReservation";

describe("ReservationAdd", () => {

  let reservation_add: ReservationAdd;
  let fake_reservation_service: FakeReservationService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        ReservationAdd,
        {provide: ReservationService, useClass: FakeReservationService}
      ]
    });

    reservation_add = TestBed.get(ReservationAdd);
    fake_reservation_service = TestBed.get(ReservationService);
  });

  describe("AddReservation", () => {

    it("should call the reservation service to add the reservation model", () => {

      spyOn(fake_reservation_service, "AddReservation");

      const test_reservation = <IReservation>{
        TableID: "",
        ReservationDate: "",
        ReservationName: "",
        ReservationPhoneNumber: "",
        ReservationTime: ""
      };

      const result = reservation_add.AddReservation();

      result.then(() => {
        expect(fake_reservation_service.AddReservation).toHaveBeenCalledWith(test_reservation);
      });
    });

    it("should return the added reservation after it is completed", () => {
      const expected_result = <IReservation>{
        TableID: "",
        ReservationDate: "",
        ReservationName: "",
        ReservationPhoneNumber: "",
        ReservationTime: ""
      };

      fake_reservation_service.SetReservationModel();

      const result = reservation_add.AddReservation();

      result.then((newReservation) => {
        expect(newReservation).toEqual(expected_result);
      });
    });

    it("should throw an exception as if there was an error when saving the reservation", () => {

      const expected_result = null;
      fake_reservation_service.SetReservationServiceToUnavailable();

      const result = reservation_add.AddReservation();

      result.then(() => {throw "";}, (addReservationError) => {
        expect(addReservationError).toEqual(expected_result);
      });
    });
  });
});
