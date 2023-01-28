/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, StepperFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerRFQFormOverridesProps = {
    CustomerRFQForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Create Quotation"?: PrimitiveOverrideProps<TextProps>;
    TextField36912693?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36912694?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36912732?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36912739?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36912746?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36912852?: PrimitiveOverrideProps<TextFieldProps>;
    StepperField?: PrimitiveOverrideProps<StepperFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    "Customer Details"?: PrimitiveOverrideProps<TextProps>;
    TextField36912698?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36912829?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36912822?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36912767?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36912774?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36912760?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36912699?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36912700?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CustomerRFQFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CustomerRFQFormOverridesProps | undefined | null;
}>;
export default function CustomerRFQForm(props: CustomerRFQFormProps): React.ReactElement;
