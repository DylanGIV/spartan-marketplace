/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, HeadingProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RFQHeaderOverridesProps = {
    RFQHeader?: PrimitiveOverrideProps<FlexProps>;
    "Frame 428"?: PrimitiveOverrideProps<FlexProps>;
    HeadingText?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    AddButton?: PrimitiveOverrideProps<ButtonProps>;
    ImportButton?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 436"?: PrimitiveOverrideProps<FlexProps>;
    All?: PrimitiveOverrideProps<BadgeProps>;
    Sent?: PrimitiveOverrideProps<BadgeProps>;
    Received?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    ItemSelect?: PrimitiveOverrideProps<SelectFieldProps>;
    DeleteIcon?: MyIconProps;
} & EscapeHatchProps;
export declare type RFQHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RFQHeaderOverridesProps | undefined | null;
}>;
export default function RFQHeader(props: RFQHeaderProps): React.ReactElement;
