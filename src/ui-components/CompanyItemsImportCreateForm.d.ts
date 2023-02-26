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
export declare type CompanyItemsImportCreateFormInputValues = {
    companyID?: string;
    importName?: string;
    importStatus?: string;
    importProgress?: number;
    importFileKey?: string;
};
export declare type CompanyItemsImportCreateFormValidationValues = {
    companyID?: ValidationFunction<string>;
    importName?: ValidationFunction<string>;
    importStatus?: ValidationFunction<string>;
    importProgress?: ValidationFunction<number>;
    importFileKey?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyItemsImportCreateFormOverridesProps = {
    CompanyItemsImportCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    companyID?: PrimitiveOverrideProps<TextFieldProps>;
    importName?: PrimitiveOverrideProps<TextFieldProps>;
    importStatus?: PrimitiveOverrideProps<TextFieldProps>;
    importProgress?: PrimitiveOverrideProps<TextFieldProps>;
    importFileKey?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompanyItemsImportCreateFormProps = React.PropsWithChildren<{
    overrides?: CompanyItemsImportCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CompanyItemsImportCreateFormInputValues) => CompanyItemsImportCreateFormInputValues;
    onSuccess?: (fields: CompanyItemsImportCreateFormInputValues) => void;
    onError?: (fields: CompanyItemsImportCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyItemsImportCreateFormInputValues) => CompanyItemsImportCreateFormInputValues;
    onValidate?: CompanyItemsImportCreateFormValidationValues;
} & React.CSSProperties>;
export default function CompanyItemsImportCreateForm(props: CompanyItemsImportCreateFormProps): React.ReactElement;
