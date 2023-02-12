/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, SelectFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PartsHeaderOverridesProps = {
    PartsHeader?: PrimitiveOverrideProps<FlexProps>;
    "Frame 428"?: PrimitiveOverrideProps<FlexProps>;
    HeadingText?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    CreateRFQ?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    ItemSelect?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PartsHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PartsHeaderOverridesProps | undefined | null;
}>;
export default function PartsHeader(props: PartsHeaderProps): React.ReactElement;
