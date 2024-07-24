import { NivoLineChartPreviewProps } from "../typings/NivoLineChartProps";

export type Platform = "web" | "desktop";

export type Properties = PropertyGroup[];

type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
};

type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
    properties?: Properties[];
};

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
};

export type Problem = {
    property?: string; // key of the property, at which the problem exists
    severity?: "error" | "warning" | "deprecation"; // default = "error"
    message: string; // description of the problem
    studioMessage?: string; // studio-specific message, defaults to message
    url?: string; // link with more information about the problem
    studioUrl?: string; // studio-specific link
};

type BaseProps = {
    type: "Image" | "Container" | "RowLayout" | "Text" | "DropZone" | "Selectable" | "Datasource";
    grow?: number; // optionally sets a growth factor if used in a layout (default = 1)
};

type ImageProps = BaseProps & {
    type: "Image";
    document?: string; // svg image
    data?: string; // base64 image
    property?: object; // widget image property object from Values API
    width?: number; // sets a fixed maximum width
    height?: number; // sets a fixed maximum height
};

type ContainerProps = BaseProps & {
    type: "Container" | "RowLayout";
    children: PreviewProps[]; // any other preview element
    borders?: boolean; // sets borders around the layout to visually group its children
    borderRadius?: number; // integer. Can be used to create rounded borders
    backgroundColor?: string; // HTML color, formatted #RRGGBB
    borderWidth?: number; // sets the border width
    padding?: number; // integer. adds padding around the container
};

type RowLayoutProps = ContainerProps & {
    type: "RowLayout";
    columnSize?: "fixed" | "grow"; // default is fixed
};

type TextProps = BaseProps & {
    type: "Text";
    content: string; // text that should be shown
    fontSize?: number; // sets the font size
    fontColor?: string; // HTML color, formatted #RRGGBB
    bold?: boolean;
    italic?: boolean;
};

type DropZoneProps = BaseProps & {
    type: "DropZone";
    property: object; // widgets property object from Values API
    placeholder: string; // text to be shown inside the dropzone when empty
    showDataSourceHeader?: boolean; // true by default. Toggles whether to show a header containing information about the datasource
};

type SelectableProps = BaseProps & {
    type: "Selectable";
    object: object; // object property instance from the Value API
    child: PreviewProps; // any type of preview property to visualize the object instance
};

type DatasourceProps = BaseProps & {
    type: "Datasource";
    property: object | null; // datasource property object from Values API
    child?: PreviewProps; // any type of preview property component (optional)
};

export type PreviewProps =
    | ImageProps
    | ContainerProps
    | RowLayoutProps
    | TextProps
    | DropZoneProps
    | SelectableProps
    | DatasourceProps;

export function getProperties(
    _values: NivoLineChartPreviewProps,
    defaultProperties: Properties /* , target: Platform*/
): Properties {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.

    // Data Source
    const datasourcePropGroup: PropertyGroup = defaultProperties.find(
        propGroup => propGroup.caption === "Data Source"
    )!;
    const datasourcePropsToRemove: string[] = [];
    if (_values.legendsType !== "specify") {
        datasourcePropsToRemove.push("legends");
    }
    if (_values.themeType !== "specify") {
        datasourcePropsToRemove.push("theme");
    }
    datasourcePropGroup.properties = datasourcePropGroup.properties!.filter(
        prop => !datasourcePropsToRemove.includes(prop.key)
    );

    // Properties
    if (!_values.enablePointLabel) {
        const propertiesPropGroup: PropertyGroup = defaultProperties.find(
            propGroup => propGroup.caption === "Properties"
        )!;
        const propertiesPropsToRemove = ["pointLabel", "pointLabelYOffset"];
        propertiesPropGroup.properties = propertiesPropGroup.properties!.filter(
            prop => !propertiesPropsToRemove.includes(prop.key)
        );
    }

    // Axis Top
    if (!_values.enableAxisTop) {
        const axisTopPropGroup: PropertyGroup = defaultProperties.find(propGroup => propGroup.caption === "Axis Top")!;
        axisTopPropGroup.properties!.splice(1, axisTopPropGroup.properties!.length - 1);
    }

    // Axis Right
    if (!_values.enableAxisRight) {
        const axisRightPropGroup: PropertyGroup = defaultProperties.find(
            propGroup => propGroup.caption === "Axis Right"
        )!;
        axisRightPropGroup.properties!.splice(1, axisRightPropGroup.properties!.length - 1);
    }

    // Axis Bottom
    if (!_values.enableAxisBottom) {
        const axisBottomPropGroup: PropertyGroup = defaultProperties.find(
            propGroup => propGroup.caption === "Axis Bottom"
        )!;
        axisBottomPropGroup.properties!.splice(1, axisBottomPropGroup.properties!.length - 1);
    }

    // Axis Left
    if (!_values.enableAxisLeft) {
        const axisLeftPropGroup: PropertyGroup = defaultProperties.find(
            propGroup => propGroup.caption === "Axis Left"
        )!;
        axisLeftPropGroup.properties!.splice(1, axisLeftPropGroup.properties!.length - 1);
    }

    // X Scale Spec
    const xScaleSpecPropGroup: PropertyGroup = defaultProperties.find(
        propGroup => propGroup.caption === "X Scale Spec"
    )!;
    let xScaleSpecPropsToRemove: string[] = [];
    if (_values.xScaleSpecType === "linear") {
        xScaleSpecPropsToRemove = xScaleSpecPropsToRemove.concat([
            "xScaleSpecBase",
            "xScaleSpecConstant",
            "xScaleSpecRound",
            "xScaleSpecFormatType",
            "xScaleSpecFormatValue",
            "xScaleSpecPrecision",
            "xScaleSpecTimeMinType",
            "xScaleSpecTimeMinValue",
            "xScaleSpecTimeMaxType",
            "xScaleSpecTimeMaxValue",
            "xScaleSpecUseUTC",
            "xScaleSpecTimeNice"
        ]);
        if (_values.xScaleSpecMinType === "auto") {
            xScaleSpecPropsToRemove.push("xScaleSpecMinValue");
        }
        if (_values.xScaleSpecMaxType === "auto") {
            xScaleSpecPropsToRemove.push("xScaleSpecMaxValue");
        }
        if (_values.xScaleSpecNiceType === "true" || _values.xScaleSpecNiceType === "false") {
            xScaleSpecPropsToRemove.push("xScaleSpecNiceValue");
        }
    } else if (_values.xScaleSpecType === "log") {
        xScaleSpecPropsToRemove = xScaleSpecPropsToRemove.concat([
            "xScaleSpecConstant",
            "xScaleSpecRound",
            "xScaleSpecFormatType",
            "xScaleSpecFormatValue",
            "xScaleSpecPrecision",
            "xScaleSpecTimeMinType",
            "xScaleSpecTimeMinValue",
            "xScaleSpecTimeMaxType",
            "xScaleSpecTimeMaxValue",
            "xScaleSpecStacked",
            "xScaleSpecReverse",
            "xScaleSpecClamp",
            "xScaleSpecUseUTC",
            "xScaleSpecNiceType",
            "xScaleSpecNiceValue",
            "xScaleSpecTimeNice"
        ]);
        if (_values.xScaleSpecMinType === "auto") {
            xScaleSpecPropsToRemove.push("xScaleSpecMinValue");
        }
        if (_values.xScaleSpecMaxType === "auto") {
            xScaleSpecPropsToRemove.push("xScaleSpecMaxValue");
        }
    } else if (_values.xScaleSpecType === "symlog") {
        xScaleSpecPropsToRemove = xScaleSpecPropsToRemove.concat([
            "xScaleSpecBase",
            "xScaleSpecRound",
            "xScaleSpecFormatType",
            "xScaleSpecFormatValue",
            "xScaleSpecPrecision",
            "xScaleSpecTimeMinType",
            "xScaleSpecTimeMinValue",
            "xScaleSpecTimeMaxType",
            "xScaleSpecTimeMaxValue",
            "xScaleSpecStacked",
            "xScaleSpecClamp",
            "xScaleSpecUseUTC",
            "xScaleSpecNiceType",
            "xScaleSpecNiceValue",
            "xScaleSpecTimeNice"
        ]);
        if (_values.xScaleSpecMinType === "auto") {
            xScaleSpecPropsToRemove.push("xScaleSpecMinValue");
        }
        if (_values.xScaleSpecMaxType === "auto") {
            xScaleSpecPropsToRemove.push("xScaleSpecMaxValue");
        }
    } else if (_values.xScaleSpecType === "point") {
        xScaleSpecPropGroup.properties!.splice(1, xScaleSpecPropGroup.properties!.length - 2);
    } else if (_values.xScaleSpecType === "band") {
        xScaleSpecPropsToRemove = xScaleSpecPropsToRemove.concat([
            "xScaleSpecBase",
            "xScaleSpecConstant",
            "xScaleSpecFormatType",
            "xScaleSpecFormatValue",
            "xScaleSpecPrecision",
            "xScaleSpecMinType",
            "xScaleSpecMinValue",
            "xScaleSpecMaxType",
            "xScaleSpecMaxValue",
            "xScaleSpecTimeMinType",
            "xScaleSpecTimeMinValue",
            "xScaleSpecTimeMaxType",
            "xScaleSpecTimeMaxValue",
            "xScaleSpecStacked",
            "xScaleSpecReverse",
            "xScaleSpecClamp",
            "xScaleSpecUseUTC",
            "xScaleSpecNiceType",
            "xScaleSpecNiceValue",
            "xScaleSpecTimeNice"
        ]);
    } else {
        xScaleSpecPropsToRemove = xScaleSpecPropsToRemove.concat([
            "xScaleSpecBase",
            "xScaleSpecConstant",
            "xScaleSpecRound",
            "xScaleSpecMinType",
            "xScaleSpecMinValue",
            "xScaleSpecMaxType",
            "xScaleSpecMaxValue",
            "xScaleSpecStacked",
            "xScaleSpecReverse",
            "xScaleSpecClamp",
            "xScaleSpecUseUTC",
            "xScaleSpecNiceType",
            "xScaleSpecNiceValue"
        ]);
        if (_values.xScaleSpecFormatType === "native") {
            xScaleSpecPropsToRemove.push("xScaleSpecFormatValue");
        }
        if (_values.xScaleSpecTimeMinType === "auto") {
            xScaleSpecPropsToRemove.push("xScaleSpecTimeMinValue");
        }
        if (_values.xScaleSpecTimeMaxType === "auto") {
            xScaleSpecPropsToRemove.push("xScaleSpecTimeMaxValue");
        }
    }
    xScaleSpecPropGroup.properties = xScaleSpecPropGroup.properties!.filter(
        prop => !xScaleSpecPropsToRemove.includes(prop.key)
    );

    // Y Scale Spec
    const yScaleSpecPropGroup: PropertyGroup = defaultProperties.find(
        propGroup => propGroup.caption === "Y Scale Spec"
    )!;
    let yScaleSpecPropsToRemove: string[] = [];
    if (_values.yScaleSpecType === "linear") {
        yScaleSpecPropsToRemove = yScaleSpecPropsToRemove.concat([
            "yScaleSpecBase",
            "yScaleSpecConstant",
            "yScaleSpecRound",
            "yScaleSpecFormatType",
            "yScaleSpecFormatValue",
            "yScaleSpecPrecision",
            "yScaleSpecTimeMinType",
            "yScaleSpecTimeMinValue",
            "yScaleSpecTimeMaxType",
            "yScaleSpecTimeMaxValue",
            "yScaleSpecUseUTC",
            "yScaleSpecTimeNice"
        ]);
        if (_values.yScaleSpecMinType === "auto") {
            yScaleSpecPropsToRemove.push("yScaleSpecMinValue");
        }
        if (_values.yScaleSpecMaxType === "auto") {
            yScaleSpecPropsToRemove.push("yScaleSpecMaxValue");
        }
        if (_values.yScaleSpecNiceType === "true" || _values.yScaleSpecNiceType === "false") {
            yScaleSpecPropsToRemove.push("yScaleSpecNiceValue");
        }
    } else if (_values.yScaleSpecType === "log") {
        yScaleSpecPropsToRemove = yScaleSpecPropsToRemove.concat([
            "yScaleSpecConstant",
            "yScaleSpecRound",
            "yScaleSpecFormatType",
            "yScaleSpecFormatValue",
            "yScaleSpecPrecision",
            "yScaleSpecTimeMinType",
            "yScaleSpecTimeMinValue",
            "yScaleSpecTimeMaxType",
            "yScaleSpecTimeMaxValue",
            "yScaleSpecStacked",
            "yScaleSpecReverse",
            "yScaleSpecClamp",
            "yScaleSpecUseUTC",
            "yScaleSpecNiceType",
            "yScaleSpecNiceValue",
            "yScaleSpecTimeNice"
        ]);
        if (_values.yScaleSpecMinType === "auto") {
            yScaleSpecPropsToRemove.push("yScaleSpecMinValue");
        }
        if (_values.yScaleSpecMaxType === "auto") {
            yScaleSpecPropsToRemove.push("yScaleSpecMaxValue");
        }
    } else if (_values.yScaleSpecType === "symlog") {
        yScaleSpecPropsToRemove = yScaleSpecPropsToRemove.concat([
            "yScaleSpecBase",
            "yScaleSpecRound",
            "yScaleSpecFormatType",
            "yScaleSpecFormatValue",
            "yScaleSpecPrecision",
            "yScaleSpecTimeMinType",
            "yScaleSpecTimeMinValue",
            "yScaleSpecTimeMaxType",
            "yScaleSpecTimeMaxValue",
            "yScaleSpecStacked",
            "yScaleSpecClamp",
            "yScaleSpecUseUTC",
            "yScaleSpecNiceType",
            "yScaleSpecNiceValue",
            "yScaleSpecTimeNice"
        ]);
        if (_values.yScaleSpecMinType === "auto") {
            yScaleSpecPropsToRemove.push("yScaleSpecMinValue");
        }
        if (_values.yScaleSpecMaxType === "auto") {
            yScaleSpecPropsToRemove.push("yScaleSpecMaxValue");
        }
    } else if (_values.yScaleSpecType === "point") {
        yScaleSpecPropGroup.properties!.splice(1, yScaleSpecPropGroup.properties!.length - 2);
    } else if (_values.yScaleSpecType === "band") {
        yScaleSpecPropsToRemove = yScaleSpecPropsToRemove.concat([
            "yScaleSpecBase",
            "yScaleSpecConstant",
            "yScaleSpecFormatType",
            "yScaleSpecFormatValue",
            "yScaleSpecPrecision",
            "yScaleSpecMinType",
            "yScaleSpecMinValue",
            "yScaleSpecMaxType",
            "yScaleSpecMaxValue",
            "yScaleSpecTimeMinType",
            "yScaleSpecTimeMinValue",
            "yScaleSpecTimeMaxType",
            "yScaleSpecTimeMaxValue",
            "yScaleSpecStacked",
            "yScaleSpecReverse",
            "yScaleSpecClamp",
            "yScaleSpecUseUTC",
            "yScaleSpecNiceType",
            "yScaleSpecNiceValue",
            "yScaleSpecTimeNice"
        ]);
    } else {
        yScaleSpecPropsToRemove = yScaleSpecPropsToRemove.concat([
            "yScaleSpecBase",
            "yScaleSpecConstant",
            "yScaleSpecRound",
            "yScaleSpecMinType",
            "yScaleSpecMinValue",
            "yScaleSpecMaxType",
            "yScaleSpecMaxValue",
            "yScaleSpecStacked",
            "yScaleSpecReverse",
            "yScaleSpecClamp",
            "yScaleSpecUseUTC",
            "yScaleSpecNiceType",
            "yScaleSpecNiceValue"
        ]);
        if (_values.yScaleSpecFormatType === "native") {
            yScaleSpecPropsToRemove.push("yScaleSpecFormatValue");
        }
        if (_values.yScaleSpecTimeMinType === "auto") {
            yScaleSpecPropsToRemove.push("yScaleSpecTimeMinValue");
        }
        if (_values.yScaleSpecTimeMaxType === "auto") {
            yScaleSpecPropsToRemove.push("yScaleSpecTimeMaxValue");
        }
    }
    yScaleSpecPropGroup.properties = yScaleSpecPropGroup.properties!.filter(
        prop => !yScaleSpecPropsToRemove.includes(prop.key)
    );

    return defaultProperties;
}

// export function check(_values: NivoLineChartPreviewProps): Problem[] {
//     const errors: Problem[] = [];
//     // Add errors to the above array to throw errors in Studio and Studio Pro.
//     /* Example
//     if (values.myProperty !== "custom") {
//         errors.push({
//             property: `myProperty`,
//             message: `The value of 'myProperty' is different of 'custom'.`,
//             url: "https://github.com/myrepo/mywidget"
//         });
//     }
//     */
//     return errors;
// }

// export function getPreview(values: NivoLineChartPreviewProps, isDarkMode: boolean, version: number[]): PreviewProps {
//     // Customize your pluggable widget appearance for Studio Pro.
//     return {
//         type: "Container",
//         children: []
//     }
// }

// export function getCustomCaption(values: NivoLineChartPreviewProps, platform: Platform): string {
//     return "NivoLineChart";
// }
