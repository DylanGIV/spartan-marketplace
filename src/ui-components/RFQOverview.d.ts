/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { RFQ } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RFQOverviewOverridesProps = {
    RFQOverview?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<ViewProps>;
    "RFQ Number"?: PrimitiveOverrideProps<TextProps>;
    "Part Number"?: PrimitiveOverrideProps<TextProps>;
    "Date Sent"?: PrimitiveOverrideProps<TextProps>;
    Comments?: PrimitiveOverrideProps<TextProps>;
    Control?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RFQOverviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    rFQ?: RFQ;
    checkboxField?: React.ReactNode;
} & {
    overrides?: RFQOverviewOverridesProps | undefined | null;
}>;
export default function RFQOverview(props: RFQOverviewProps): React.ReactElement;
