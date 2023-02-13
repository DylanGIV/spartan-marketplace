/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Item } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PartsListDetailsOverridesProps = {
    PartsListDetails?: PrimitiveOverrideProps<FlexProps>;
    "Part No"?: PrimitiveOverrideProps<TextProps>;
    "Alt Part No"?: PrimitiveOverrideProps<TextProps>;
    NSN?: PrimitiveOverrideProps<TextProps>;
    QTY?: PrimitiveOverrideProps<TextProps>;
    Condition?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Control?: PrimitiveOverrideProps<TextProps>;
    Price?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PartsListDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    item?: Item;
    checkboxField?: React.ReactNode;
} & {
    overrides?: PartsListDetailsOverridesProps | undefined | null;
}>;
export default function PartsListDetails(props: PartsListDetailsProps): React.ReactElement;
