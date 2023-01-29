/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CheckboxFieldProps, DividerProps, FlexProps, SelectFieldProps, StepperFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerRFQFormOverridesProps = {
    CustomerRFQForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    CreateQuotation?: PrimitiveOverrideProps<FlexProps>;
    "Create Quotation"?: PrimitiveOverrideProps<TextProps>;
    CompanyName?: PrimitiveOverrideProps<TextFieldProps>;
    CompanyContactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    QuotationNumber?: PrimitiveOverrideProps<TextFieldProps>;
    QuotationDate?: PrimitiveOverrideProps<TextFieldProps>;
    PartNumber?: PrimitiveOverrideProps<TextFieldProps>;
    AlternatePartNumber?: PrimitiveOverrideProps<TextFieldProps>;
    Condition?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    QuantityRequested?: PrimitiveOverrideProps<StepperFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    CustomerDetails?: PrimitiveOverrideProps<FlexProps>;
    "Customer Details"?: PrimitiveOverrideProps<TextProps>;
    ContactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    ContactPhone?: PrimitiveOverrideProps<ViewProps>;
    SavedAddresses?: PrimitiveOverrideProps<SelectFieldProps>;
    Country?: PrimitiveOverrideProps<TextFieldProps>;
    State?: PrimitiveOverrideProps<TextFieldProps>;
    City?: PrimitiveOverrideProps<TextFieldProps>;
    StreetAddress?: PrimitiveOverrideProps<TextFieldProps>;
    Zipcode?: PrimitiveOverrideProps<TextFieldProps>;
    SaveAddressCheckbox?: PrimitiveOverrideProps<CheckboxFieldProps>;
    AdditionalComments?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 421"?: PrimitiveOverrideProps<FlexProps>;
    SubmitButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CustomerRFQFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    contactPhone?: React.ReactNode;
} & {
    overrides?: CustomerRFQFormOverridesProps | undefined | null;
}>;
export default function CustomerRFQForm(props: CustomerRFQFormProps): React.ReactElement;
