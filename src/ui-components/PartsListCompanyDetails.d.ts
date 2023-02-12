/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Company } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PartsListCompanyDetailsOverridesProps = {
    PartsListCompanyDetails?: PrimitiveOverrideProps<FlexProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<ViewProps>;
    image36562867?: PrimitiveOverrideProps<ImageProps>;
    image36562868?: PrimitiveOverrideProps<ImageProps>;
    Company?: PrimitiveOverrideProps<TextProps>;
    Extra?: PrimitiveOverrideProps<TextProps>;
    "Phone:"?: PrimitiveOverrideProps<TextProps>;
    Distance?: PrimitiveOverrideProps<TextProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    "Description:"?: PrimitiveOverrideProps<TextProps>;
    "Fax:"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PartsListCompanyDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    company?: Company;
    frame437?: React.ReactNode;
} & {
    overrides?: PartsListCompanyDetailsOverridesProps | undefined | null;
}>;
export default function PartsListCompanyDetails(props: PartsListCompanyDetailsProps): React.ReactElement;
