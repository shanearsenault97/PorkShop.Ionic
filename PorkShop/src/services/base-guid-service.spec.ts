import {TestBed} from "@angular/core/testing";
import {BaseGUIDService} from "./BaseGUIDService";
import {FakeStorageService} from "../fakes/fake-storage-service";
import {FakeUUIDService} from "../fakes/fake-uuid-service";
import {UUIDService} from "./UUIDService";
import {StorageService} from "./StorageService";
import {CacheKeys} from "../models/enums/CacheKeys";

describe("BaseGUIDService", () => {
  let base_guid_service: BaseGUIDService;
  let fake_storage_service: FakeStorageService;
  let fake_uuid_service: FakeUUIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseGUIDService,
        {provide: StorageService, useClass: FakeStorageService},
        {provide: UUIDService, useClass: FakeUUIDService}
      ]
    });

    base_guid_service = TestBed.get(BaseGUIDService);
    fake_storage_service = TestBed.get(StorageService);
    fake_uuid_service = TestBed.get(UUIDService);
  });

  describe("GetGUIDItems", () => {

    it("should return an empty cache result when there is nothing in storage", () => {

      const expected_result = [];
      const cache_key = CacheKeys.TestKey;

      const result = base_guid_service.GetGUIDItems(cache_key);

      result.then((guid_items) => {
        expect(guid_items).toEqual(expected_result);
      });
    });

    it("should return the data in storage when there is not an empty cache", () => {

      const expected_result = {
        FirstName: "Clark",
        LastName: "Kent",
        Alias: "Superman"
      };

      const cache_key = CacheKeys.TestKey;
      fake_storage_service.SetStorageToHaveValue();

      const result = base_guid_service.GetGUIDItems(cache_key);

      result.then((guid_items) => {
        expect(guid_items).toEqual(expected_result);
      });

    });

  });

});
