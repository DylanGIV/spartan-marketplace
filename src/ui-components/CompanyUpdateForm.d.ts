/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Company } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CompanyUpdateFormInputValues = {
    companyName?: string;
    phone?: string;
    contactEmail?: string;
    profilePictureUrl?: string;
    fax?: string;
    cageCode?: string;
    qualityCertifications?: string[];
    companyDescription?: string;
};
export declare type CompanyUpdateFormValidationValues = {
    companyName?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    contactEmail?: ValidationFunction<string>;
    profilePictureUrl?: ValidationFunction<string>;
    fax?: ValidationFunction<string>;
    cageCode?: ValidationFunction<string>;
    qualityCertifications?: ValidationFunction<string>;
    companyDescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyUpdateFormOverridesProps = {
    CompanyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    contactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    profilePictureUrl?: PrimitiveOverrideProps<TextFieldProps>;
    fax?: PrimitiveOverrideProps<TextFieldProps>;
    cageCode?: PrimitiveOverrideProps<TextFieldProps>;
    qualityCertifications?: PrimitiveOverrideProps<TextFieldProps>;
    companyDescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompanyUpdateFormProps = React.PropsWithChildren<{
    overrides?: CompanyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    company?: Company;
    onSubmit?: (fields: CompanyUpdateFormInputValues) => CompanyUpdateFormInputValues;
    onSuccess?: (fields: CompanyUpdateFormInputValues) => void;
    onError?: (fields: CompanyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyUpdateFormInputValues) => CompanyUpdateFormInputValues;
    onValidate?: CompanyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CompanyUpdateForm(props: CompanyUpdateFormProps): React.ReactElement;
