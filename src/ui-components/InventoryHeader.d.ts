/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, SearchFieldProps, SelectFieldProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InventoryHeaderOverridesProps = {
    InventoryHeader?: PrimitiveOverrideProps<FlexProps>;
    "Frame 428"?: PrimitiveOverrideProps<FlexProps>;
    HeadingText?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    AddButton?: PrimitiveOverrideProps<ButtonProps>;
    ImportButton?: PrimitiveOverrideProps<ButtonProps>;
    ItemCount?: PrimitiveOverrideProps<ViewProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    PartSearchTypeSelect?: PrimitiveOverrideProps<SelectFieldProps>;
    PartSearch?: PrimitiveOverrideProps<SearchFieldProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    ItemSelect?: PrimitiveOverrideProps<SelectFieldProps>;
    DeleteIcon?: MyIconProps;
} & EscapeHatchProps;
export declare type InventoryHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    itemCount?: React.ReactNode;
} & {
    overrides?: InventoryHeaderOverridesProps | undefined | null;
}>;
export default function InventoryHeader(props: InventoryHeaderProps): React.ReactElement;
