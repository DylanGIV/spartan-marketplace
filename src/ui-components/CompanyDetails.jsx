/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, TextField } from "@aws-amplify/ui-react";
export default function CompanyDetails(props) {
  const { overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "CompanyDetails")}
      {...rest}
    >
      <TextField
        width="unset"
        height="unset"
        label="Company Name"
        shrink="0"
        alignSelf="stretch"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "CompanyName")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="Company Contact Email"
        shrink="0"
        alignSelf="stretch"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "CompanyContactEmail")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="Quotation Number"
        shrink="0"
        alignSelf="stretch"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "QuotationNumber")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="Quotation Date"
        shrink="0"
        alignSelf="stretch"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "QuotationDate")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="Part Number"
        shrink="0"
        alignSelf="stretch"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "PartNumber")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="Alternate Part Number"
        shrink="0"
        alignSelf="stretch"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "AlternatePartNumber")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="Condition"
        shrink="0"
        alignSelf="stretch"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Condition")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="Description"
        shrink="0"
        alignSelf="stretch"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Description")}
      ></TextField>
    </Flex>
  );
}
