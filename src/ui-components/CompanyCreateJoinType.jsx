/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex } from "@aws-amplify/ui-react";
export default function CompanyCreateJoinType(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CompanyCreateJoinType")}
      {...rest}
    >
      <Flex
        gap="30px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BadgeContainer")}
      >
        <Badge
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          variation="default"
          children="Create Company"
          {...getOverrideProps(overrides, "Badge37813150")}
        ></Badge>
        <Badge
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          variation="default"
          children="Join Company"
          {...getOverrideProps(overrides, "Badge37813152")}
        ></Badge>
      </Flex>
    </Flex>
  );
}
