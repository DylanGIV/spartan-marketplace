/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ItemMRO } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ItemMROUpdateFormInputValues = {
    nsn?: string;
    partNumber?: string;
    altPartNumber?: string;
    description?: string;
    quantity?: number;
    price?: number;
    certification?: string;
    companyID?: string;
    imageUrls?: string[];
};
export declare type ItemMROUpdateFormValidationValues = {
    nsn?: ValidationFunction<string>;
    partNumber?: ValidationFunction<string>;
    altPartNumber?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    certification?: ValidationFunction<string>;
    companyID?: ValidationFunction<string>;
    imageUrls?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemMROUpdateFormOverridesProps = {
    ItemMROUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nsn?: PrimitiveOverrideProps<TextFieldProps>;
    partNumber?: PrimitiveOverrideProps<TextFieldProps>;
    altPartNumber?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    certification?: PrimitiveOverrideProps<TextFieldProps>;
    companyID?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrls?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemMROUpdateFormProps = React.PropsWithChildren<{
    overrides?: ItemMROUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    itemMRO?: ItemMRO;
    onSubmit?: (fields: ItemMROUpdateFormInputValues) => ItemMROUpdateFormInputValues;
    onSuccess?: (fields: ItemMROUpdateFormInputValues) => void;
    onError?: (fields: ItemMROUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemMROUpdateFormInputValues) => ItemMROUpdateFormInputValues;
    onValidate?: ItemMROUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ItemMROUpdateForm(props: ItemMROUpdateFormProps): React.ReactElement;
