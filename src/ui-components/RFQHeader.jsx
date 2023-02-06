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
  Heading,
  SelectField,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function RFQHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      height="210px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "RFQHeader")}
      {...rest}
    >
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
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 428")}
      >
        <Heading
          shrink="0"
          level="1"
          children="RFQs"
          {...getOverrideProps(overrides, "HeadingText")}
        ></Heading>
      </Flex>
      <Flex
        gap="135px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 431")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-end"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 429")}
        >
          <Button
            shrink="0"
            size="small"
            isDisabled={false}
            variation="default"
            children="ADD"
            {...getOverrideProps(overrides, "AddButton")}
          ></Button>
          <Button
            shrink="0"
            size="small"
            isDisabled={false}
            variation="default"
            children="IMPORT"
            {...getOverrideProps(overrides, "ImportButton")}
          ></Button>
        </Flex>
        <Flex
          gap="15px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-end"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 436")}
        >
          <Badge
            shrink="0"
            size="default"
            variation="default"
            children="All"
            {...getOverrideProps(overrides, "All")}
          ></Badge>
          <Badge
            shrink="0"
            size="default"
            variation="default"
            children="Sent"
            {...getOverrideProps(overrides, "Sent")}
          ></Badge>
          <Badge
            shrink="0"
            size="default"
            variation="default"
            children="Received"
            {...getOverrideProps(overrides, "Received")}
          ></Badge>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="flex-end"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 430")}
        >
          <SelectField
            placeholder="Items..."
            width="121px"
            shrink="0"
            size="small"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "ItemSelect")}
          ></SelectField>
          <MyIcon
            width="37px"
            height="37px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="delete"
            {...getOverrideProps(overrides, "DeleteIcon")}
          ></MyIcon>
        </Flex>
      </Flex>
    </Flex>
  );
}
