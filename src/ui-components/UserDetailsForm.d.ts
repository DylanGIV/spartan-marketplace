/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserDetailsFormOverridesProps = {
    UserDetailsForm?: PrimitiveOverrideProps<FlexProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    ContactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    ContactPhone?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type UserDetailsFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    contactPhone?: React.ReactNode;
} & {
    overrides?: UserDetailsFormOverridesProps | undefined | null;
}>;
export default function UserDetailsForm(props: UserDetailsFormProps): React.ReactElement;
