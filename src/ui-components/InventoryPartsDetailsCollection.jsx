/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Item } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import InventoryPartsDetails from "./InventoryPartsDetails";
import { Collection } from "@aws-amplify/ui-react";
export default function InventoryPartsDetailsCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Item,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={50}
      templateColumns="1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "InventoryPartsDetailsCollection")}
      {...rest}
    >
      {(item, index) => (
        <InventoryPartsDetails
          item={item}
          height="auto"
          width="auto"
          margin="0 0 1px 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></InventoryPartsDetails>
      )}
    </Collection>
  );
}
