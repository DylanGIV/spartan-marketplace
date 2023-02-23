/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, TextField, View } from "@aws-amplify/ui-react";
export default function UserDetailsForm(props) {
  const { contactPhone, overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "UserDetailsForm")}
      {...rest}
    >
      <TextField
        label="First Name"
        width="unset"
        shrink="0"
        alignSelf="stretch"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "FirstName")}
      ></TextField>
      <TextField
        label="Last Name"
        width="unset"
        shrink="0"
        alignSelf="stretch"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "LastName")}
      ></TextField>
      <TextField
        label="Contact Email"
        width="unset"
        shrink="0"
        alignSelf="stretch"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "ContactEmail")}
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
    </Flex>
  );
}
