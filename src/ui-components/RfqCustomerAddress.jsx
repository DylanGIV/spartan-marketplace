/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SelectField, TextField, View } from "@aws-amplify/ui-react";
export default function RfqCustomerAddress(props) {
  const { saveAddressCheckbox, overrides, ...rest } = props;
  return (
    <Flex
      gap="5px"
      direction="column"
      width="557.5px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="15px 32px 15px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "RfqCustomerAddress")}
      {...rest}
    >
      <SelectField
        width="493.5px"
        height="unset"
        label="Saved Addresses"
        shrink="0"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SavedAddresses")}
      ></SelectField>
      <SelectField
        width="493.5px"
        height="unset"
        label="Country"
        shrink="0"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Country")}
      ></SelectField>
      <TextField
        width="493.5px"
        height="unset"
        label="State/Region"
        padding="0px 2px 0px 0px"
        shrink="0"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "State")}
      ></TextField>
      <TextField
        width="493.5px"
        height="unset"
        label="City"
        padding="0px 2px 0px 0px"
        shrink="0"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "City")}
      ></TextField>
      <Flex
        gap="10px"
        direction="row"
        width="493px"
        height="156px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 422")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 423")}
        >
          <TextField
            width="145px"
            height="unset"
            label="Unit Number"
            padding="0px 1px 1px 1px"
            shrink="0"
            placeholder="Placeholder"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "UnitNumber")}
          ></TextField>
          <TextField
            width="145px"
            height="unset"
            label="Street Number"
            padding="0px 1px 1px 1px"
            shrink="0"
            placeholder="Placeholder"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "StreetNumber")}
          ></TextField>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 424")}
        >
          <TextField
            width="343px"
            height="unset"
            label="Address Line 1"
            padding="0px 7px 1px 1px"
            shrink="0"
            placeholder="Placeholder"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "AddressLine1")}
          ></TextField>
          <TextField
            width="343px"
            height="unset"
            label="Address Line 2"
            padding="0px 7px 1px 1px"
            shrink="0"
            placeholder="Placeholder"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "AddressLine2")}
          ></TextField>
        </Flex>
      </Flex>
      <Flex
        gap="50px"
        direction="row"
        width="493.5px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-end"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 425")}
      >
        <TextField
          width="268px"
          height="unset"
          label="Postal Code"
          padding="0px 1px 1px 1px"
          shrink="0"
          placeholder="Placeholder"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "Zipcode")}
        ></TextField>
        <View
          width="136px"
          height="49px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          children={saveAddressCheckbox}
          {...getOverrideProps(overrides, "SaveAddressCheckbox")}
        ></View>
      </Flex>
    </Flex>
  );
}
