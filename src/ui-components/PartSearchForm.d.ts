/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, SelectFieldProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PartSearchFormOverridesProps = {
    PartSearchForm?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    Part?: PrimitiveOverrideProps<BadgeProps>;
    MRO?: PrimitiveOverrideProps<BadgeProps>;
    TextEntry?: PrimitiveOverrideProps<FlexProps>;
    CountrySelect?: PrimitiveOverrideProps<SelectFieldProps>;
    PartTextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Submit?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PartSearchFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PartSearchFormOverridesProps | undefined | null;
}>;
export default function PartSearchForm(props: PartSearchFormProps): React.ReactElement;
