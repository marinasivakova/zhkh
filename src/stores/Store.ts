import { types, getEnv, Instance } from "mobx-state-tree"
import { TrackerStore } from "./Trackers"
import { AddressesStore } from "./Addresses"

export const Store = types
    .model("Store", {
        trackerStore: types.optional(TrackerStore, {
            Trackers:  [],
        }),
        addressesStore: types.optional(AddressesStore, {
            Addresses: [],
        })
    })
    .views((self) => ({
        get fetch() {
            return getEnv(self).fetch
        },
        get alert() {
            return getEnv(self).alert
        },
        get isLoading() {
            return self.trackerStore.isLoading
        },
        get trackers() {
            return self.trackerStore.Trackers
        },
        get addresses() {
            return self.addressesStore.Addresses
        }
    }))
    .actions((self) => ({
        afterCreate() {
            self.trackerStore.loadTrackers()
        }
    }))

export type RootStoreModel = Instance<typeof Store>