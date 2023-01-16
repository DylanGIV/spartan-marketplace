/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserDetails } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserDetailsUpdateFormInputValues = {
    companyID?: string;
    untitledfield?: string;
};
export declare type UserDetailsUpdateFormValidationValues = {
    companyID?: ValidationFunction<string>;
    untitledfield?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserDetailsUpdateFormOverridesProps = {
    UserDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    companyID?: PrimitiveOverrideProps<TextFieldProps>;
    untitledfield?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userDetails?: UserDetails;
    onSubmit?: (fields: UserDetailsUpdateFormInputValues) => UserDetailsUpdateFormInputValues;
    onSuccess?: (fields: UserDetailsUpdateFormInputValues) => void;
    onError?: (fields: UserDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserDetailsUpdateFormInputValues) => UserDetailsUpdateFormInputValues;
    onValidate?: UserDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserDetailsUpdateForm(props: UserDetailsUpdateFormProps): React.ReactElement;
