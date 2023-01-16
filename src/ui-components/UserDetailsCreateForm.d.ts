/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserDetailsCreateFormInputValues = {
    companyID?: string;
    untitledfield?: string;
};
export declare type UserDetailsCreateFormValidationValues = {
    companyID?: ValidationFunction<string>;
    untitledfield?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserDetailsCreateFormOverridesProps = {
    UserDetailsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    companyID?: PrimitiveOverrideProps<TextFieldProps>;
    untitledfield?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserDetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: UserDetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserDetailsCreateFormInputValues) => UserDetailsCreateFormInputValues;
    onSuccess?: (fields: UserDetailsCreateFormInputValues) => void;
    onError?: (fields: UserDetailsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserDetailsCreateFormInputValues) => UserDetailsCreateFormInputValues;
    onValidate?: UserDetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserDetailsCreateForm(props: UserDetailsCreateFormProps): React.ReactElement;
