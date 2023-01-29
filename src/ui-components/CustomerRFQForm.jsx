/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  CheckboxField,
  Divider,
  Flex,
  SelectField,
  StepperField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CustomerRFQForm(props) {
  const { contactPhone, overrides, ...rest } = props;
  return (
    <Flex
      gap="14px"
      direction="column"
      width="1200px"
      height="1222px"
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
        shrink="0"
        alignSelf="stretch"
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
          alignSelf="stretch"
          position="relative"
          padding="0px 32px 0px 32px"
          {...getOverrideProps(overrides, "CreateQuotation")}
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
            label="Company Name"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
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
            size="large"
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
            size="large"
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
            size="large"
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
            size="large"
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
            size="large"
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
            size="large"
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
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Description")}
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
            {...getOverrideProps(overrides, "QuantityRequested")}
          ></StepperField>
        </Flex>
        <Divider
          height="1000px"
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
          {...getOverrideProps(overrides, "CustomerDetails")}
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
            {...getOverrideProps(overrides, "ContactEmail")}
          ></TextField>
          <View
            width="unset"
            height="88px"
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
          <SelectField
            label="Saved Addresses"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SavedAddresses")}
          ></SelectField>
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
            {...getOverrideProps(overrides, "Country")}
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
            {...getOverrideProps(overrides, "State")}
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
            {...getOverrideProps(overrides, "City")}
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
            {...getOverrideProps(overrides, "StreetAddress")}
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
            {...getOverrideProps(overrides, "Zipcode")}
          ></TextField>
          <CheckboxField
            label="Save Address?"
            shrink="0"
            size="large"
            defaultChecked={true}
            isDisabled={false}
            labelPosition="start"
            {...getOverrideProps(overrides, "SaveAddressCheckbox")}
          ></CheckboxField>
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
            {...getOverrideProps(overrides, "AdditionalComments")}
          ></TextField>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 493px 24px 493px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 421")}
      >
        <Button
          width="227px"
          height="57px"
          borderRadius="10px"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Primary Button"
          {...getOverrideProps(overrides, "SubmitButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
