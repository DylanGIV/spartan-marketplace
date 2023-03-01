/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SelectField, TextField, View } from "@aws-amplify/ui-react";
export default function CompanyCreateDetails(props) {
  const { contactPhone, logo, overrides, ...rest } = props;
  return (
    <Flex
      gap="5px"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CompanyCreateDetails")}
      {...rest}
    >
      <TextField
        width="unset"
        height="unset"
        label="Company Name"
        placeholder="Company Name"
        shrink="0"
        alignSelf="stretch"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "CompanyName")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="Description"
        placeholder="Description"
        shrink="0"
        alignSelf="stretch"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Description")}
      ></TextField>
      <SelectField
        width="unset"
        height="unset"
        label="Country"
        placeholder="Select Country"
        shrink="0"
        alignSelf="stretch"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "CountrySelect")}
      ></SelectField>
      <TextField
        width="unset"
        height="unset"
        label="Contact Email"
        placeholder="Email"
        shrink="0"
        alignSelf="stretch"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <View
        width="unset"
        height="58px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        children={contactPhone}
        {...getOverrideProps(overrides, "ContactPhone")}
      ></View>
      <TextField
        width="unset"
        height="unset"
        label="Fax"
        placeholder="Fax"
        shrink="0"
        alignSelf="stretch"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Fax")}
      ></TextField>
      <View
        width="unset"
        height="58px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        children={logo}
        {...getOverrideProps(overrides, "Logo")}
      ></View>
    </Flex>
  );
}
