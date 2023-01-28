/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Divider,
  Flex,
  StepperField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function CustomerRFQForm(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1200px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="15px"
      padding="32px 0px 32px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CustomerRFQForm")}
      {...rest}
    >
      <Flex
        gap="42px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 313")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 32px 0px 32px"
          {...getOverrideProps(overrides, "Frame 406")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="800"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create Quotation"
            {...getOverrideProps(overrides, "Create Quotation")}
          ></Text>
          <TextField
            label="Quotation Number"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912693")}
          ></TextField>
          <TextField
            label="Quotation Date"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912694")}
          ></TextField>
          <TextField
            label="Part Number"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912732")}
          ></TextField>
          <TextField
            label="Alternate Part Number"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912739")}
          ></TextField>
          <TextField
            label="Condition"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912746")}
          ></TextField>
          <TextField
            label="Description"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912852")}
          ></TextField>
          <StepperField
            label="Quantity Requested"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "StepperField")}
          ></StepperField>
        </Flex>
        <Divider
          height="784px"
          shrink="0"
          size="small"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 32px 0px 32px"
          {...getOverrideProps(overrides, "Frame 409")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="800"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Customer Details"
            {...getOverrideProps(overrides, "Customer Details")}
          ></Text>
          <TextField
            label="Contact Email"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912698")}
          ></TextField>
          <TextField
            label="Contact Phone"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912829")}
          ></TextField>
          <TextField
            label="Country"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912822")}
          ></TextField>
          <TextField
            label="State"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912767")}
          ></TextField>
          <TextField
            label="City"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912774")}
          ></TextField>
          <TextField
            label="Street address"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912760")}
          ></TextField>
          <TextField
            label="Zip code"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912699")}
          ></TextField>
          <TextField
            label="Additional Comments"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField36912700")}
          ></TextField>
        </Flex>
      </Flex>
    </Flex>
  );
}
