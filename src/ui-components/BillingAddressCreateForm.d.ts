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
export declare type BillingAddressCreateFormInputValues = {
    unitNumber?: string;
    streetNumber?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    countryName?: string;
};
export declare type BillingAddressCreateFormValidationValues = {
    unitNumber?: ValidationFunction<string>;
    streetNumber?: ValidationFunction<string>;
    addressLine1?: ValidationFunction<string>;
    addressLine2?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
    postalCode?: ValidationFunction<string>;
    countryName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BillingAddressCreateFormOverridesProps = {
    BillingAddressCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    unitNumber?: PrimitiveOverrideProps<TextFieldProps>;
    streetNumber?: PrimitiveOverrideProps<TextFieldProps>;
    addressLine1?: PrimitiveOverrideProps<TextFieldProps>;
    addressLine2?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
    postalCode?: PrimitiveOverrideProps<TextFieldProps>;
    countryName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BillingAddressCreateFormProps = React.PropsWithChildren<{
    overrides?: BillingAddressCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BillingAddressCreateFormInputValues) => BillingAddressCreateFormInputValues;
    onSuccess?: (fields: BillingAddressCreateFormInputValues) => void;
    onError?: (fields: BillingAddressCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BillingAddressCreateFormInputValues) => BillingAddressCreateFormInputValues;
    onValidate?: BillingAddressCreateFormValidationValues;
} & React.CSSProperties>;
export default function BillingAddressCreateForm(props: BillingAddressCreateFormProps): React.ReactElement;
