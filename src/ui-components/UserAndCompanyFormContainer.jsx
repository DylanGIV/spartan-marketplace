/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
export default function UserAndCompanyFormContainer(props) {
  const { createQuoteDropdown, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="350px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="24px 15px 24px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UserAndCompanyFormContainer")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="27px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="53px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Just A Few More Things..."
        {...getOverrideProps(overrides, "Just A Few More Things...")}
      ></Text>
      <View
        width="unset"
        height="500px"
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
        children={createQuoteDropdown}
        {...getOverrideProps(overrides, "CreateQuoteDropdown")}
      ></View>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="small"
        isDisabled={false}
        variation="primary"
        children="Submit"
        {...getOverrideProps(overrides, "SubmitButton")}
      ></Button>
    </Flex>
  );
}
