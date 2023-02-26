/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserDetails } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserDetailsUpdateFormInputValues = {
    userID?: string;
    firstName?: string;
    lastName?: string;
    contactEmail?: string;
    contactPhone?: string;
    isCompanyOwner?: boolean;
};
export declare type UserDetailsUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    contactEmail?: ValidationFunction<string>;
    contactPhone?: ValidationFunction<string>;
    isCompanyOwner?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserDetailsUpdateFormOverridesProps = {
    UserDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    contactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhone?: PrimitiveOverrideProps<TextFieldProps>;
    isCompanyOwner?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type UserDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserDetailsUpdateFormOverridesProps | undefined | null;
} & {
    userID?: string;
    userDetails?: UserDetails;
    onSubmit?: (fields: UserDetailsUpdateFormInputValues) => UserDetailsUpdateFormInputValues;
    onSuccess?: (fields: UserDetailsUpdateFormInputValues) => void;
    onError?: (fields: UserDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserDetailsUpdateFormInputValues) => UserDetailsUpdateFormInputValues;
    onValidate?: UserDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserDetailsUpdateForm(props: UserDetailsUpdateFormProps): React.ReactElement;
