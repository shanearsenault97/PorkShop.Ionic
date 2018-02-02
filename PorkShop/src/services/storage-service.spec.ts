import {StorageService} from "./StorageService";
import {TestBed} from "@angular/core/testing";
import {FakeStorage} from "../fakes/fake-storage";
import {CacheKeys} from "../models/enums/CacheKeys";
import {Storage} from '@ionic/storage';

describe('StorageService', () => {
  let storage_service: StorageService;
  let fake_storage: FakeStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,
        {provide: Storage, useClass: FakeStorage}
      ]
    });

    storage_service = TestBed.get(StorageService);
    fake_storage = TestBed.get(Storage);
  });

  describe("Get", () => {

    it("should call the method to get from storage", () => {
      spyOn(fake_storage, "get");

      const storage_key = CacheKeys.TestKey;
      const result = storage_service.Get(storage_key);

      result.then(() => {
        expect(fake_storage.get).toHaveBeenCalledWith(storage_key);
      }, () => {throw "";});

    });

    it("should get a value from the app storage", () => {

      const expected_result = {
        FirstName: "Clark",
        LastName: "Kent",
        Alias: "Superman"
      };
      const storage_key = CacheKeys.TestKey;
      const result = storage_service.Get(storage_key);

      result.then((storageResult) => {
        expect(storageResult).toEqual(expected_result);
      }, () => {throw "";});
    });

    it("should throw an exception indicating an error from getting from storage", () => {
      const expected_result = null;
      const storage_key = CacheKeys.TestKey;

      fake_storage.SetStorageToUnavailable();
      const result = storage_service.Get(storage_key);

      result.then(() => {throw "";}, (storageError) => {
        expect(storageError).toEqual(expected_result);
      });
    });

  });

  describe("Save", () => {

    it("should call the save method with the storage key and data", () => {
      spyOn(fake_storage, "set");

      const cache_data = {};
      const storage_key = CacheKeys.TestKey;
      const result = storage_service.Save(storage_key, cache_data);

      result.then(() => {
        expect(fake_storage.set).toHaveBeenCalledWith(storage_key, JSON.stringify(cache_data));
      }, () => {throw "";});
    });

    it("should return the specified item that was added to the storage", () => {
      const expected_result = {
        FirstName: "Clark",
        LastName: "Kent",
        Alias: "Superman"
      };
      const storage_key = CacheKeys.TestKey;
      const result = storage_service.Save(storage_key, expected_result);

      result.then((storage) => {
        expect(storage).toEqual(expected_result);
      }, () => {throw "";});
    });

    it("should throw an exception when attempting to save the storage" , () => {
      const expected_result = null;
      const cache_data = {};
      const storage_key = CacheKeys.TestKey;

      fake_storage.SetStorageToUnavailable();
      const result = storage_service.Save(storage_key, cache_data);

      result.then(() => {throw "";}, (storageError) => {
        expect(storageError).toEqual(expected_result);
      });
    });

  });
});
