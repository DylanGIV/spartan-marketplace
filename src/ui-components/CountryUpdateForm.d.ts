/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Country } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CountryUpdateFormInputValues = {
    countryName?: string;
    code?: string;
};
export declare type CountryUpdateFormValidationValues = {
    countryName?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CountryUpdateFormOverridesProps = {
    CountryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    countryName?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CountryUpdateFormProps = React.PropsWithChildren<{
    overrides?: CountryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    country?: Country;
    onSubmit?: (fields: CountryUpdateFormInputValues) => CountryUpdateFormInputValues;
    onSuccess?: (fields: CountryUpdateFormInputValues) => void;
    onError?: (fields: CountryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CountryUpdateFormInputValues) => CountryUpdateFormInputValues;
    onValidate?: CountryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CountryUpdateForm(props: CountryUpdateFormProps): React.ReactElement;
