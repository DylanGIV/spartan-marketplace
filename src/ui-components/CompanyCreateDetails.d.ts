/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, SelectFieldProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyCreateDetailsOverridesProps = {
    CompanyCreateDetails?: PrimitiveOverrideProps<FlexProps>;
    CompanyName?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    CountrySelect?: PrimitiveOverrideProps<SelectFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    ContactPhone?: PrimitiveOverrideProps<ViewProps>;
    Fax?: PrimitiveOverrideProps<TextFieldProps>;
    Logo?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type CompanyCreateDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    contactPhone?: React.ReactNode;
    logo?: React.ReactNode;
} & {
    overrides?: CompanyCreateDetailsOverridesProps | undefined | null;
}>;
export default function CompanyCreateDetails(props: CompanyCreateDetailsProps): React.ReactElement;
