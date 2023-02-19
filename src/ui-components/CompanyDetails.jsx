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
        label="Company Name"
        width="unset"
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
        label="Company Contact Email"
        width="unset"
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
        label="Quotation Number"
        width="unset"
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
        label="Quotation Date"
        width="unset"
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
        label="Part Number"
        width="unset"
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
        label="Alternate Part Number"
        width="unset"
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
        label="Condition"
        width="unset"
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
        label="Description"
        width="unset"
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
