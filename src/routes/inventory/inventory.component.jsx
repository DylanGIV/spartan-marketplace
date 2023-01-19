import {
  InventoryKey,
  InventoryPartsDetailsCollection,
} from '../../ui-components';

const Inventory = () => {
  const AddPartHandler = async () => {};

  return (
    <div style={{ padding: 10 }}>
      <h1>Inventory Page</h1>
      <button onClick={AddPartHandler}>ADD PART</button>
      <InventoryKey />
      <InventoryPartsDetailsCollection />
    </div>
  );
};

export default Inventory;
