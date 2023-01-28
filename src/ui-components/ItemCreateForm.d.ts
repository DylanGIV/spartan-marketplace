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
export declare type ItemCreateFormInputValues = {
    nsn?: string;
    partNumber?: string;
    altPartNumber?: string;
    description?: string;
    quantity?: number;
    condition?: string;
    control?: string;
    price?: number;
    companyID?: string;
    imageUrls?: string[];
};
export declare type ItemCreateFormValidationValues = {
    nsn?: ValidationFunction<string>;
    partNumber?: ValidationFunction<string>;
    altPartNumber?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    condition?: ValidationFunction<string>;
    control?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    companyID?: ValidationFunction<string>;
    imageUrls?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemCreateFormOverridesProps = {
    ItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nsn?: PrimitiveOverrideProps<TextFieldProps>;
    partNumber?: PrimitiveOverrideProps<TextFieldProps>;
    altPartNumber?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    condition?: PrimitiveOverrideProps<TextFieldProps>;
    control?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    companyID?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrls?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemCreateFormProps = React.PropsWithChildren<{
    overrides?: ItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ItemCreateFormInputValues) => ItemCreateFormInputValues;
    onSuccess?: (fields: ItemCreateFormInputValues) => void;
    onError?: (fields: ItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemCreateFormInputValues) => ItemCreateFormInputValues;
    onValidate?: ItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function ItemCreateForm(props: ItemCreateFormProps): React.ReactElement;
