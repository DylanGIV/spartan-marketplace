/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerDetailsOverridesProps = {
    CustomerDetails?: PrimitiveOverrideProps<FlexProps>;
    ContactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    ContactPhone?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type CustomerDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    contactPhone?: React.ReactNode;
} & {
    overrides?: CustomerDetailsOverridesProps | undefined | null;
}>;
export default function CustomerDetails(props: CustomerDetailsProps): React.ReactElement;
