/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, TextAreaField, View } from "@aws-amplify/ui-react";
export default function CustomerRFQFormContainer(props) {
  const { createQuoteDropdown, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="557.5px"
      height="930px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="15px"
      padding="0px 15px 0px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CustomerRFQFormContainer")}
      {...rest}
    >
      <View
        width="unset"
        height="750px"
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
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(220,222,224,1)"
        borderRadius="5px 5px 15px 15px"
        padding="1px 9px 5px 9px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Footer")}
      >
        <TextAreaField
          width="527.5px"
          height="125px"
          label="Additional Comments"
          shrink="0"
          placeholder="Placeholder"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "AdditionalComments")}
        ></TextAreaField>
        <Flex
          gap="30px"
          direction="row"
          width="527.5px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ButtonContainer")}
        >
          <Button
            width="unset"
            height="33px"
            borderRadius="10px"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="link"
            children="Prev"
            {...getOverrideProps(overrides, "PrevButton")}
          ></Button>
          <Button
            width="unset"
            height="33px"
            borderRadius="10px"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="link"
            children="Next"
            {...getOverrideProps(overrides, "NextButton")}
          ></Button>
          <Button
            width="unset"
            height="33px"
            borderRadius="10px"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="primary"
            children="Submit All"
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
