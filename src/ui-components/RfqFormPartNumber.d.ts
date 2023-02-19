/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, StepperFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RfqFormPartNumberOverridesProps = {
    RfqFormPartNumber?: PrimitiveOverrideProps<FlexProps>;
    PartNumber?: PrimitiveOverrideProps<TextFieldProps>;
    QuantityRequested?: PrimitiveOverrideProps<StepperFieldProps>;
} & EscapeHatchProps;
export declare type RfqFormPartNumberProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RfqFormPartNumberOverridesProps | undefined | null;
}>;
export default function RfqFormPartNumber(props: RfqFormPartNumberProps): React.ReactElement;
