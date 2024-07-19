import { flow, Instance, types } from "mobx-state-tree";
import { offsetStore } from "./offset";
import { store } from "../main";

const Area = types.model("Area", {
  id: types.identifier,
});

export const Tracker = types.model("Tracker", {
  id: types.identifier,
  _type: types.array(types.string),
  area: Area,
  is_automatic: types.maybeNull(types.boolean),
  communication: types.maybeNull(types.string),
  description: types.maybeNull(types.string),
  serial_number: types.maybeNull(types.string),
  installation_date: types.maybeNull(types.string),
  brand_name: types.maybeNull(types.string),
  model_name: types.maybeNull(types.string),
  initial_values: types.array(types.number),
});

export interface ITracker extends Instance<typeof Tracker> {}

export const TrackerStore = types
  .model("TrackerStore", {
    isLoading: true,
    Trackers: types.array(Tracker),
  })
  .actions((self) => {
    function markLoading(loading: boolean) {
      self.isLoading = loading;
    }

    function updateTrackers(results: Array<ITracker>) {
      results.forEach((tracker) => {
        if (
          !self.Trackers.filter(
            (trackerInSelf) => tracker.area.id === trackerInSelf.area.id
          ).length
        ) {
          store.addressesStore.checkAddress(tracker.area.id);
        }
        self.Trackers.push(tracker);
      });
    }

    const loadTrackers = flow(function* loadTrackers() {
      markLoading(true);
      try {
        const offset = offsetStore.value;
        const response = yield fetch(
          "http://showroom.eis24.me/api/v4/test/meters/?limit=" +
            offsetStore.amount +
            "&offset=" +
            offset
        );
        const json = yield response.json();
        const results = json.results;
        updateTrackers(results);
        markLoading(false);
      } catch (err) {
        console.error("Failed to load Trackers ", err);
      }
    });

    const switchPage = () => {
      self.Trackers.clear();
      loadTrackers();
    };

    const deleteTracker = flow(function* deleteTracker(id: string) {
      try {
        offsetStore.deleteItem();
        yield fetch("http://showroom.eis24.me/api/v4/test/meters/" + id, {
          method: "DELETE",
        });
        self.Trackers.remove(
          self.Trackers.filter((tracker) => tracker.id === id)[0]
        );
        loadSingleTracker();
      } catch (err) {
        console.error("Failed to delete a tracker ", err);
      }
    });

    const loadSingleTracker = flow(function* loadTracker() {
      markLoading(true);
      try {
        const offset = offsetStore.value;
        const response = yield fetch(
          "http://showroom.eis24.me/api/v4/test/meters/?limit=" +
            1 +
            "&offset=" +
            offset
        );
        const json = yield response.json();
        const results = json.results;
        updateTrackers(results);
        markLoading(false);
      } catch (err) {
        console.error("Failed to load a tracker", err);
      }
    });

    return {
      updateTrackers,
      loadSingleTracker,
      loadTrackers,
      deleteTracker,
      switchPage,
    };
  });
