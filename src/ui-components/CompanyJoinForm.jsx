/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SelectField, Text, TextField } from "@aws-amplify/ui-react";
export default function CompanyJoinForm(props) {
  const { overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "CompanyJoinForm")}
      {...rest}
    >
      <TextField
        width="unset"
        height="unset"
        label="Enter Company Code"
        placeholder="xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxx"
        shrink="0"
        alignSelf="stretch"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="OR"
        {...getOverrideProps(overrides, "OR")}
      ></Text>
      <SelectField
        width="unset"
        height="unset"
        label="Request To Join Company"
        placeholder="Select Company"
        shrink="0"
        alignSelf="stretch"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
    </Flex>
  );
}
