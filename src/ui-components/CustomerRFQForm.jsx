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
  TextAreaField,
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
      height="1179px"
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
          alignItems="center"
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
          <Button
            width="227px"
            height="57px"
            borderRadius="10px"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Submit"
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
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
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
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
          <Flex
            gap="24px"
            direction="column"
            width="529px"
            height="648px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="15px"
            padding="1px 1px 1px 1px"
            backgroundColor="rgba(245,245,245,1)"
            {...getOverrideProps(overrides, "Frame 426")}
          >
            <SelectField
              label="Saved Addresses"
              width="493.5px"
              shrink="0"
              placeholder="Placeholder"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "SavedAddresses")}
            ></SelectField>
            <SelectField
              label="Country"
              width="493.5px"
              shrink="0"
              placeholder="Placeholder"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "Country")}
            ></SelectField>
            <TextField
              label="State/Region"
              width="493.5px"
              padding="0px 2px 0px 0px"
              shrink="0"
              placeholder="Placeholder"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "State")}
            ></TextField>
            <TextField
              label="City"
              width="493.5px"
              padding="0px 2px 0px 0px"
              shrink="0"
              placeholder="Placeholder"
              size="default"
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
              backgroundColor="rgba(245,245,245,1)"
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
                backgroundColor="rgba(245,245,245,1)"
                {...getOverrideProps(overrides, "Frame 423")}
              >
                <TextField
                  label="Unit Number"
                  width="145px"
                  padding="0px 1px 1px 1px"
                  shrink="0"
                  placeholder="Placeholder"
                  size="default"
                  isDisabled={false}
                  labelHidden={false}
                  variation="default"
                  {...getOverrideProps(overrides, "UnitNumber")}
                ></TextField>
                <TextField
                  label="Street Number"
                  width="145px"
                  padding="0px 1px 1px 1px"
                  shrink="0"
                  placeholder="Placeholder"
                  size="default"
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
                backgroundColor="rgba(245,245,245,1)"
                {...getOverrideProps(overrides, "Frame 424")}
              >
                <TextField
                  label="Address Line 1"
                  width="343px"
                  padding="0px 7px 1px 1px"
                  shrink="0"
                  placeholder="Placeholder"
                  size="default"
                  isDisabled={false}
                  labelHidden={false}
                  variation="default"
                  {...getOverrideProps(overrides, "AddressLine1")}
                ></TextField>
                <TextField
                  label="Address Line 2"
                  width="343px"
                  padding="0px 7px 1px 1px"
                  shrink="0"
                  placeholder="Placeholder"
                  size="default"
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
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(245,245,245,1)"
              {...getOverrideProps(overrides, "Frame 425")}
            >
              <TextField
                label="Postal Code"
                width="268px"
                padding="0px 1px 1px 1px"
                shrink="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "Zipcode")}
              ></TextField>
              <CheckboxField
                label="Save Address?"
                padding="25px 0px 0px 0px"
                shrink="0"
                size="default"
                defaultChecked={false}
                isDisabled={false}
                labelPosition="start"
                {...getOverrideProps(overrides, "SaveAddressCheckbox")}
              ></CheckboxField>
            </Flex>
          </Flex>
          <TextAreaField
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
          ></TextAreaField>
        </Flex>
      </Flex>
    </Flex>
  );
}
