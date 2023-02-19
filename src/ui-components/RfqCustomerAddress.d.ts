/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, SelectFieldProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RfqCustomerAddressOverridesProps = {
    RfqCustomerAddress?: PrimitiveOverrideProps<FlexProps>;
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
} & EscapeHatchProps;
export declare type RfqCustomerAddressProps = React.PropsWithChildren<Partial<FlexProps> & {
    saveAddressCheckbox?: React.ReactNode;
} & {
    overrides?: RfqCustomerAddressOverridesProps | undefined | null;
}>;
export default function RfqCustomerAddress(props: RfqCustomerAddressProps): React.ReactElement;
