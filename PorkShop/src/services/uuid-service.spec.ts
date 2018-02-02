import {TestBed} from "@angular/core/testing";
import {UUIDService} from "./UUIDService";
import {UUID} from "angular2-uuid";

describe("UUIDService", () => {
  let uuid_service: UUIDService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        UUIDService
      ]
    });

    uuid_service = TestBed.get(UUIDService);
  });

  describe("Generate", () => {

    it("should return a UUID as a string", () => {
      const result = uuid_service.Generate();
      expect(result).toEqual(jasmine.any(String));
    });
  });
});
