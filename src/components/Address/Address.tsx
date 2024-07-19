import { observer } from "mobx-react-lite";
import { store } from "../../main";

const Address = observer(({id}: {id: string}) => {
  const currentAddress = store.addresses.filter((address)=> address.id === id)[0]
  let addressAsString = ''
  if (currentAddress) {
    addressAsString = `${currentAddress.house.address} ${currentAddress.str_number_full}`;
  }
  return (
    <div>
      {currentAddress && addressAsString}
    </div>
  );
});

export default Address;
