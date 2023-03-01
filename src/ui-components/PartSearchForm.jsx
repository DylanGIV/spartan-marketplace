/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Flex,
  SelectField,
  TextAreaField,
} from "@aws-amplify/ui-react";
export default function PartSearchForm(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="75px"
      direction="column"
      width="unset"
      height="466px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="15px"
      padding="35px 35px 35px 35px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PartSearchForm")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Header")}
      >
        <Badge
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          variation="default"
          children="PART"
          {...getOverrideProps(overrides, "Part")}
        ></Badge>
        <Badge
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          variation="default"
          children="MRO"
          {...getOverrideProps(overrides, "MRO")}
        ></Badge>
      </Flex>
      <Flex
        gap="20px"
        direction="column"
        width="310px"
        height="176px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="5px 5px 5px 5px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TextEntry")}
      >
        <SelectField
          width="unset"
          height="unset"
          label="Labe"
          placeholder="Country"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "CountrySelect")}
        ></SelectField>
        <TextAreaField
          width="unset"
          height="unset"
          placeholder="Part # or Description"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "PartTextAreaField")}
        ></TextAreaField>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 7px 0px 7px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Submit")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Search"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
