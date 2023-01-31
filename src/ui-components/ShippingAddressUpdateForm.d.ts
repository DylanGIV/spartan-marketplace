/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ShippingAddress } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShippingAddressUpdateFormInputValues = {
    unitNumber?: string;
    streetNumber?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    regi?: string;
    postalCode?: string;
    countryName?: string;
};
export declare type ShippingAddressUpdateFormValidationValues = {
    unitNumber?: ValidationFunction<string>;
    streetNumber?: ValidationFunction<string>;
    addressLine1?: ValidationFunction<string>;
    addressLine2?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    regi?: ValidationFunction<string>;
    postalCode?: ValidationFunction<string>;
    countryName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShippingAddressUpdateFormOverridesProps = {
    ShippingAddressUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    unitNumber?: PrimitiveOverrideProps<TextFieldProps>;
    streetNumber?: PrimitiveOverrideProps<TextFieldProps>;
    addressLine1?: PrimitiveOverrideProps<TextFieldProps>;
    addressLine2?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    regi?: PrimitiveOverrideProps<TextFieldProps>;
    postalCode?: PrimitiveOverrideProps<TextFieldProps>;
    countryName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShippingAddressUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShippingAddressUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shippingAddress?: ShippingAddress;
    onSubmit?: (fields: ShippingAddressUpdateFormInputValues) => ShippingAddressUpdateFormInputValues;
    onSuccess?: (fields: ShippingAddressUpdateFormInputValues) => void;
    onError?: (fields: ShippingAddressUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShippingAddressUpdateFormInputValues) => ShippingAddressUpdateFormInputValues;
    onValidate?: ShippingAddressUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShippingAddressUpdateForm(props: ShippingAddressUpdateFormProps): React.ReactElement;
