/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideBarOverridesProps = {
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 434"?: PrimitiveOverrideProps<FlexProps>;
    SpartanLogo?: PrimitiveOverrideProps<ViewProps>;
    "Frame 435"?: PrimitiveOverrideProps<FlexProps>;
    "Spartan Marketplace"?: PrimitiveOverrideProps<TextProps>;
    Divider1?: PrimitiveOverrideProps<DividerProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    SubHeading1?: PrimitiveOverrideProps<TextProps>;
    PartsFrame?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37473393?: MyIconProps;
    Parts?: PrimitiveOverrideProps<TextProps>;
    MROFrame?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37473396?: MyIconProps;
    MRO?: PrimitiveOverrideProps<TextProps>;
    "Frame 32137473398"?: PrimitiveOverrideProps<FlexProps>;
    SubHeading2?: PrimitiveOverrideProps<TextProps>;
    "Frame 41337473400"?: PrimitiveOverrideProps<FlexProps>;
    InventoryFrame?: PrimitiveOverrideProps<FlexProps>;
    Icon3?: PrimitiveOverrideProps<ViewProps>;
    Vector37473403?: PrimitiveOverrideProps<IconProps>;
    Inventory?: PrimitiveOverrideProps<TextProps>;
    RFQFrame?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector37473407?: PrimitiveOverrideProps<IconProps>;
    RFQs?: PrimitiveOverrideProps<TextProps>;
    "Frame 415"?: PrimitiveOverrideProps<FlexProps>;
    SubHeading3?: PrimitiveOverrideProps<TextProps>;
    "Frame 41337473427"?: PrimitiveOverrideProps<FlexProps>;
    SettingsFrame?: PrimitiveOverrideProps<FlexProps>;
    Settings37473447?: PrimitiveOverrideProps<ViewProps>;
    Vector37473448?: PrimitiveOverrideProps<IconProps>;
    Settings37473431?: PrimitiveOverrideProps<TextProps>;
    ArrowSlot?: PrimitiveOverrideProps<FlexProps>;
    Divider2?: PrimitiveOverrideProps<DividerProps>;
    "Frame 32137473410"?: PrimitiveOverrideProps<FlexProps>;
    CompanyLogo?: PrimitiveOverrideProps<ViewProps>;
    "Frame 32137473450"?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    frame432?: React.ReactNode;
    arrowSlot?: React.ReactNode;
} & {
    overrides?: SideBarOverridesProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;
