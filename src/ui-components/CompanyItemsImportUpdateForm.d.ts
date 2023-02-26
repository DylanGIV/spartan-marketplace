/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CompanyItemsImport } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CompanyItemsImportUpdateFormInputValues = {
    companyID?: string;
    importName?: string;
    importStatus?: string;
    importProgress?: number;
    importFileKey?: string;
};
export declare type CompanyItemsImportUpdateFormValidationValues = {
    companyID?: ValidationFunction<string>;
    importName?: ValidationFunction<string>;
    importStatus?: ValidationFunction<string>;
    importProgress?: ValidationFunction<number>;
    importFileKey?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyItemsImportUpdateFormOverridesProps = {
    CompanyItemsImportUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    companyID?: PrimitiveOverrideProps<TextFieldProps>;
    importName?: PrimitiveOverrideProps<TextFieldProps>;
    importStatus?: PrimitiveOverrideProps<TextFieldProps>;
    importProgress?: PrimitiveOverrideProps<TextFieldProps>;
    importFileKey?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompanyItemsImportUpdateFormProps = React.PropsWithChildren<{
    overrides?: CompanyItemsImportUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    companyItemsImport?: CompanyItemsImport;
    onSubmit?: (fields: CompanyItemsImportUpdateFormInputValues) => CompanyItemsImportUpdateFormInputValues;
    onSuccess?: (fields: CompanyItemsImportUpdateFormInputValues) => void;
    onError?: (fields: CompanyItemsImportUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyItemsImportUpdateFormInputValues) => CompanyItemsImportUpdateFormInputValues;
    onValidate?: CompanyItemsImportUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CompanyItemsImportUpdateForm(props: CompanyItemsImportUpdateFormProps): React.ReactElement;
