/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, StepperField, TextField } from "@aws-amplify/ui-react";
export default function RfqFormPartNumber(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="557.5px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-end"
      overflow="hidden"
      position="relative"
      padding="5px 0px 5px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "RfqFormPartNumber")}
      {...rest}
    >
      <TextField
        width="412px"
        height="unset"
        label="Part Number"
        padding="1px 32px 1px 32px"
        shrink="0"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "PartNumber")}
      ></TextField>
      <StepperField
        width="120px"
        height="unset"
        label="Quantity Requested"
        alignItems="center"
        padding="1px 0px 1px 0px"
        shrink="0"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "QuantityRequested")}
      ></StepperField>
    </Flex>
  );
}
