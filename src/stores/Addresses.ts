import { flow, Instance, types } from "mobx-state-tree";

const House = types.model("House", {
  address: types.string,
  id: types.identifier,
  fias_addrobjs: types.array(types.string),
});

export const Address = types.model("Address", {
  id: types.identifier,
  number: types.number,
  str_number: types.string,
  str_number_full: types.string,
  house: House,
});

export interface IAddress extends Instance<typeof Address> {}

export const AddressesStore = types
  .model("AddressesStore", {
    Addresses: types.array(Address)
  })
  .views((self) => ({
    address(id:string) {
      return self.Addresses.filter(
        (address) => address.id === id
      )[0];
    },
  }))
  .actions((self) => {
    const checkAddress = flow(function* loadAddress(id: string) {
      try {
        const checked = self.address(id)
        if (!checked) {
          const response = yield fetch(
            "http://showroom.eis24.me/api/v4/test/areas/?id=" + id
          );
          const json = yield response.json();
          const results = json.results;
          if (response.ok) {
            self.Addresses.push(results[0]);
            return results[0];
          }
          return results[0];
        }
        return checked;
      } catch (err) {
        console.error("Failed to get address ", err);
      }
    });

    return {
      checkAddress,
    };
  });
