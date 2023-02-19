/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyDetailsOverridesProps = {
    CompanyDetails?: PrimitiveOverrideProps<FlexProps>;
    CompanyName?: PrimitiveOverrideProps<TextFieldProps>;
    CompanyContactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    QuotationNumber?: PrimitiveOverrideProps<TextFieldProps>;
    QuotationDate?: PrimitiveOverrideProps<TextFieldProps>;
    PartNumber?: PrimitiveOverrideProps<TextFieldProps>;
    AlternatePartNumber?: PrimitiveOverrideProps<TextFieldProps>;
    Condition?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompanyDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CompanyDetailsOverridesProps | undefined | null;
}>;
export default function CompanyDetails(props: CompanyDetailsProps): React.ReactElement;
