/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, SelectFieldProps, StepperFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    SubmitButton?: PrimitiveOverrideProps<ButtonProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    CustomerDetails?: PrimitiveOverrideProps<FlexProps>;
    "Customer Details"?: PrimitiveOverrideProps<TextProps>;
    ContactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    ContactPhone?: PrimitiveOverrideProps<ViewProps>;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    SavedAddresses?: PrimitiveOverrideProps<SelectFieldProps>;
    Country?: PrimitiveOverrideProps<SelectFieldProps>;
    State?: PrimitiveOverrideProps<TextFieldProps>;
    City?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 422"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 423"?: PrimitiveOverrideProps<FlexProps>;
    UnitNumber?: PrimitiveOverrideProps<TextFieldProps>;
    StreetNumber?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 424"?: PrimitiveOverrideProps<FlexProps>;
    AddressLine1?: PrimitiveOverrideProps<TextFieldProps>;
    AddressLine2?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 425"?: PrimitiveOverrideProps<FlexProps>;
    Zipcode?: PrimitiveOverrideProps<TextFieldProps>;
    SaveAddressCheckbox?: PrimitiveOverrideProps<ViewProps>;
    AdditionalComments?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type CustomerRFQFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    contactPhone?: React.ReactNode;
    saveAddressCheckbox?: React.ReactNode;
} & {
    overrides?: CustomerRFQFormOverridesProps | undefined | null;
}>;
export default function CustomerRFQForm(props: CustomerRFQFormProps): React.ReactElement;
