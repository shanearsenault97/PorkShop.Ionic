import {ReservationService} from "./ReservationService";
import {FakeBaseGuidService} from "../fakes/fake-base-guid-service";
import {TestBed} from "@angular/core/testing";
import {BaseGUIDService} from "./BaseGUIDService";
import {IReservation} from "../models/interfaces/IReservation";
import {CacheKeys} from "../models/enums/CacheKeys";

describe("ReservationService", ()  => {
  let reservation_service: ReservationService;
  let fake_base_guid_service: FakeBaseGuidService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        ReservationService,
        {provide: BaseGUIDService, useClass: FakeBaseGuidService}
      ]
    });

    reservation_service = TestBed.get(ReservationService);
    fake_base_guid_service = TestBed.get(BaseGUIDService);
  });

  describe("AddReservation", () => {

    it("should call the saveguiditems method with the new item and cache key", () => {

      spyOn(fake_base_guid_service, "SaveGUIDItem");

      const test_reservation = <IReservation>{
        TableID: "",
        ReservationDate: "",
        ReservationTime: "",
        ReservationName: "",
        ReservationPhoneNumber: ""
      };

      const result = reservation_service.AddReservation(test_reservation);

      result.then(() => {
        expect(fake_base_guid_service.SaveGUIDItem).toHaveBeenCalledWith(test_reservation, CacheKeys.Reservations)
      });
    });

    it("should return the new reservation again after saving", () => {

      const expected_result = <any>{
        TableID: "",
        ReservationDate: "",
        ReservationTime: "",
        ReservationName: "",
        ReservationPhoneNumber: ""
      };

      const test_reservation = <IReservation>expected_result;

      const result = reservation_service.AddReservation(test_reservation);

      result.then((newReservation) => {
        expect(newReservation).toEqual(expected_result);
      });
    });

    it("should throw an exception as if an error occured on the reservation service", () => {
      const expected_result = null;
      const test_reservation = <IReservation>{
        TableID: "",
        ReservationDate: "",
        ReservationTime: "",
        ReservationName: "",
        ReservationPhoneNumber: ""
      };

      fake_base_guid_service.SetServiceToUnavailable();
      const result = reservation_service.AddReservation(test_reservation);

      result.then(() => {}, (storageError) => {
        expect(storageError).toEqual(expected_result);
      });
    })

  });
});
