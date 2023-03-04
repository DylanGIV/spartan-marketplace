/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CustomerRfqEmail } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomerRfqEmailUpdateFormInputValues = {
    email?: string;
    dateSent?: string;
    htmlBody?: string;
};
export declare type CustomerRfqEmailUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    dateSent?: ValidationFunction<string>;
    htmlBody?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerRfqEmailUpdateFormOverridesProps = {
    CustomerRfqEmailUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    dateSent?: PrimitiveOverrideProps<TextFieldProps>;
    htmlBody?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CustomerRfqEmailUpdateFormProps = React.PropsWithChildren<{
    overrides?: CustomerRfqEmailUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    customerRfqEmail?: CustomerRfqEmail;
    onSubmit?: (fields: CustomerRfqEmailUpdateFormInputValues) => CustomerRfqEmailUpdateFormInputValues;
    onSuccess?: (fields: CustomerRfqEmailUpdateFormInputValues) => void;
    onError?: (fields: CustomerRfqEmailUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerRfqEmailUpdateFormInputValues) => CustomerRfqEmailUpdateFormInputValues;
    onValidate?: CustomerRfqEmailUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerRfqEmailUpdateForm(props: CustomerRfqEmailUpdateFormProps): React.ReactElement;
