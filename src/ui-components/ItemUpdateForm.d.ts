/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Item } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ItemUpdateFormInputValues = {
    PartID?: string;
    NSN?: string;
    PartNumber?: string;
    AltPartNumber?: string;
    description?: string;
    quantity?: number;
    condition?: string;
    imageUrl?: string;
    control?: string;
    price?: number;
};
export declare type ItemUpdateFormValidationValues = {
    PartID?: ValidationFunction<string>;
    NSN?: ValidationFunction<string>;
    PartNumber?: ValidationFunction<string>;
    AltPartNumber?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    condition?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    control?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemUpdateFormOverridesProps = {
    ItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PartID?: PrimitiveOverrideProps<TextFieldProps>;
    NSN?: PrimitiveOverrideProps<TextFieldProps>;
    PartNumber?: PrimitiveOverrideProps<TextFieldProps>;
    AltPartNumber?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    condition?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    control?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: ItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    item?: Item;
    onSubmit?: (fields: ItemUpdateFormInputValues) => ItemUpdateFormInputValues;
    onSuccess?: (fields: ItemUpdateFormInputValues) => void;
    onError?: (fields: ItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemUpdateFormInputValues) => ItemUpdateFormInputValues;
    onValidate?: ItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ItemUpdateForm(props: ItemUpdateFormProps): React.ReactElement;
