/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, TextField, View } from "@aws-amplify/ui-react";
export default function CustomerDetails(props) {
  const { contactPhone, overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "CustomerDetails")}
      {...rest}
    >
      <TextField
        width="unset"
        height="unset"
        label="Contact Email"
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
        backgroundColor="rgba(255,255,255,1)"
        children={contactPhone}
        {...getOverrideProps(overrides, "ContactPhone")}
      ></View>
    </Flex>
  );
}
