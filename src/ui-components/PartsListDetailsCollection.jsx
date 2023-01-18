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
import PartsListDetails from "./PartsListDetails";
import { Collection } from "@aws-amplify/ui-react";
export default function PartsListDetailsCollection(props) {
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
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={3}
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "PartsListDetailsCollection")}
      {...rest}
    >
      {(item, index) => (
        <PartsListDetails
          item={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PartsListDetails>
      )}
    </Collection>
  );
}
