/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BillingAddress } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BillingAddressUpdateFormInputValues = {
    unitNumber?: string;
    streetNumber?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    countryName?: string;
};
export declare type BillingAddressUpdateFormValidationValues = {
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
export declare type BillingAddressUpdateFormOverridesProps = {
    BillingAddressUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    unitNumber?: PrimitiveOverrideProps<TextFieldProps>;
    streetNumber?: PrimitiveOverrideProps<TextFieldProps>;
    addressLine1?: PrimitiveOverrideProps<TextFieldProps>;
    addressLine2?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
    postalCode?: PrimitiveOverrideProps<TextFieldProps>;
    countryName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BillingAddressUpdateFormProps = React.PropsWithChildren<{
    overrides?: BillingAddressUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    billingAddress?: BillingAddress;
    onSubmit?: (fields: BillingAddressUpdateFormInputValues) => BillingAddressUpdateFormInputValues;
    onSuccess?: (fields: BillingAddressUpdateFormInputValues) => void;
    onError?: (fields: BillingAddressUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BillingAddressUpdateFormInputValues) => BillingAddressUpdateFormInputValues;
    onValidate?: BillingAddressUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BillingAddressUpdateForm(props: BillingAddressUpdateFormProps): React.ReactElement;
