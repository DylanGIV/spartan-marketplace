/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RFQKeyOverridesProps = {
    RFQKey?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<ViewProps>;
    "RFQ Number"?: PrimitiveOverrideProps<TextProps>;
    "Part Number"?: PrimitiveOverrideProps<TextProps>;
    "Date Sent"?: PrimitiveOverrideProps<TextProps>;
    Comments?: PrimitiveOverrideProps<TextProps>;
    Control?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RFQKeyProps = React.PropsWithChildren<Partial<FlexProps> & {
    checkboxField?: React.ReactNode;
} & {
    overrides?: RFQKeyOverridesProps | undefined | null;
}>;
export default function RFQKey(props: RFQKeyProps): React.ReactElement;
