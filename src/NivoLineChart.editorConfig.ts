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
    /* Example
    if (values.myProperty === "custom") {
        delete defaultProperties.properties.myOtherProperty;
    }
    */

    if (!_values.enablePointLabel) {
        const propertiesPropGroup: PropertyGroup = defaultProperties.find(
            propGroup => propGroup.caption === "Properties"
        )!;
        propertiesPropGroup.properties!.splice(
            propertiesPropGroup.properties!.findIndex(prop => prop.key === "pointLabel"),
            1
        );
        propertiesPropGroup.properties!.splice(
            propertiesPropGroup.properties!.findIndex(prop => prop.key === "pointLabelYOffset"),
            1
        );
    }

    if (!_values.enableAxisTop) {
        const axisTopPropGroup: PropertyGroup = defaultProperties.find(propGroup => propGroup.caption === "Axis Top")!;
        axisTopPropGroup.properties!.splice(1, axisTopPropGroup.properties!.length - 1);
    }
    if (!_values.enableAxisRight) {
        const axisRightPropGroup: PropertyGroup = defaultProperties.find(
            propGroup => propGroup.caption === "Axis Right"
        )!;
        axisRightPropGroup.properties!.splice(1, axisRightPropGroup.properties!.length - 1);
    }
    if (!_values.enableAxisBottom) {
        const axisBottomPropGroup: PropertyGroup = defaultProperties.find(
            propGroup => propGroup.caption === "Axis Bottom"
        )!;
        axisBottomPropGroup.properties!.splice(1, axisBottomPropGroup.properties!.length - 1);
    }
    if (!_values.enableAxisLeft) {
        const axisLeftPropGroup: PropertyGroup = defaultProperties.find(
            propGroup => propGroup.caption === "Axis Left"
        )!;
        axisLeftPropGroup.properties!.splice(1, axisLeftPropGroup.properties!.length - 1);
    }

    const xScaleSpecPropGroup: PropertyGroup = defaultProperties.find(
        propGroup => propGroup.caption === "X Scale Spec"
    )!;
    if (_values.xScaleSpecType === "linear") {
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecBase"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecConstant"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecRound"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecFormatType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecFormatValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecPrecision"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMinType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMinValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMaxType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMaxValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecUseUTC"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeNice"),
            1
        );
        if (_values.xScaleSpecMinType === "auto") {
            xScaleSpecPropGroup.properties!.splice(
                xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMinValue"),
                1
            );
        }
        if (_values.xScaleSpecMaxType === "auto") {
            xScaleSpecPropGroup.properties!.splice(
                xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMaxValue"),
                1
            );
        }
        if (_values.xScaleSpecNiceType === "true" || _values.xScaleSpecNiceType === "false") {
            xScaleSpecPropGroup.properties!.splice(
                xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecNiceValue"),
                1
            );
        }
    } else if (_values.xScaleSpecType === "log") {
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecConstant"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecRound"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecFormatType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecFormatValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecPrecision"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMinType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMinValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMaxType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMaxValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecStacked"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecReverse"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecClamp"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecUseUTC"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecNiceType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecNiceValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeNice"),
            1
        );
        if (_values.xScaleSpecMinType === "auto") {
            xScaleSpecPropGroup.properties!.splice(
                xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMinValue"),
                1
            );
        }
        if (_values.xScaleSpecMaxType === "auto") {
            xScaleSpecPropGroup.properties!.splice(
                xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMaxValue"),
                1
            );
        }
    } else if (_values.xScaleSpecType === "symlog") {
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecBase"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecRound"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecFormatType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecFormatValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecPrecision"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMinType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMinValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMaxType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMaxValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecStacked"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecClamp"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecUseUTC"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecNiceType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecNiceValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeNice"),
            1
        );
        if (_values.xScaleSpecMinType === "auto") {
            xScaleSpecPropGroup.properties!.splice(
                xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMinValue"),
                1
            );
        }
        if (_values.xScaleSpecMaxType === "auto") {
            xScaleSpecPropGroup.properties!.splice(
                xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMaxValue"),
                1
            );
        }
    } else if (_values.xScaleSpecType === "point") {
        xScaleSpecPropGroup.properties!.splice(1, xScaleSpecPropGroup.properties!.length - 1);
    } else if (_values.xScaleSpecType === "band") {
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecBase"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecConstant"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecFormatType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecFormatValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecPrecision"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMinType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMinValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMaxType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMaxValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMinType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMinValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMaxType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMaxValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecStacked"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecReverse"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecClamp"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecUseUTC"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecNiceType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecNiceValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeNice"),
            1
        );
    } else {
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecBase"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecConstant"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecRound"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMinType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMinValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMaxType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecMaxValue"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecStacked"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecReverse"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecClamp"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecNiceType"),
            1
        );
        xScaleSpecPropGroup.properties!.splice(
            xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecNiceValue"),
            1
        );
        if (_values.xScaleSpecFormatType === "native") {
            xScaleSpecPropGroup.properties!.splice(
                xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecFormatValue"),
                1
            );
        }
        if (_values.xScaleSpecTimeMinType === "auto") {
            xScaleSpecPropGroup.properties!.splice(
                xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMinValue"),
                1
            );
        }
        if (_values.xScaleSpecTimeMaxType === "auto") {
            xScaleSpecPropGroup.properties!.splice(
                xScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "xScaleSpecTimeMaxValue"),
                1
            );
        }
    }

    const yScaleSpecPropGroup: PropertyGroup = defaultProperties.find(
        propGroup => propGroup.caption === "Y Scale Spec"
    )!;
    if (_values.yScaleSpecType === "linear") {
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecBase"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecConstant"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecRound"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecFormatType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecFormatValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecPrecision"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMinType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMinValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMaxType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMaxValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecUseUTC"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeNice"),
            1
        );
        if (_values.yScaleSpecMinType === "auto") {
            yScaleSpecPropGroup.properties!.splice(
                yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMinValue"),
                1
            );
        }
        if (_values.yScaleSpecMaxType === "auto") {
            yScaleSpecPropGroup.properties!.splice(
                yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMaxValue"),
                1
            );
        }
        if (_values.yScaleSpecNiceType === "true" || _values.yScaleSpecNiceType === "false") {
            yScaleSpecPropGroup.properties!.splice(
                yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecNiceValue"),
                1
            );
        }
    } else if (_values.yScaleSpecType === "log") {
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecConstant"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecRound"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecFormatType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecFormatValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecPrecision"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMinType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMinValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMaxType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMaxValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecStacked"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecReverse"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecClamp"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecUseUTC"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecNiceType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecNiceValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeNice"),
            1
        );
        if (_values.yScaleSpecMinType === "auto") {
            yScaleSpecPropGroup.properties!.splice(
                yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMinValue"),
                1
            );
        }
        if (_values.yScaleSpecMaxType === "auto") {
            yScaleSpecPropGroup.properties!.splice(
                yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMaxValue"),
                1
            );
        }
    } else if (_values.yScaleSpecType === "symlog") {
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecBase"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecRound"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecFormatType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecFormatValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecPrecision"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMinType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMinValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMaxType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMaxValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecStacked"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecClamp"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecUseUTC"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecNiceType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecNiceValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeNice"),
            1
        );
        if (_values.yScaleSpecMinType === "auto") {
            yScaleSpecPropGroup.properties!.splice(
                yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMinValue"),
                1
            );
        }
        if (_values.yScaleSpecMaxType === "auto") {
            yScaleSpecPropGroup.properties!.splice(
                yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMaxValue"),
                1
            );
        }
    } else if (_values.yScaleSpecType === "point") {
        yScaleSpecPropGroup.properties!.splice(1, yScaleSpecPropGroup.properties!.length - 1);
    } else if (_values.yScaleSpecType === "band") {
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecBase"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecConstant"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecFormatType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecFormatValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecPrecision"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMinType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMinValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMaxType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMaxValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMinType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMinValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMaxType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMaxValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecStacked"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecReverse"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecClamp"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecUseUTC"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecNiceType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecNiceValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeNice"),
            1
        );
    } else {
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecBase"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecConstant"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecRound"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMinType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMinValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMaxType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecMaxValue"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecStacked"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecReverse"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecClamp"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecNiceType"),
            1
        );
        yScaleSpecPropGroup.properties!.splice(
            yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecNiceValue"),
            1
        );
        if (_values.yScaleSpecFormatType === "native") {
            yScaleSpecPropGroup.properties!.splice(
                yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecFormatValue"),
                1
            );
        }
        if (_values.yScaleSpecTimeMinType === "auto") {
            yScaleSpecPropGroup.properties!.splice(
                yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMinValue"),
                1
            );
        }
        if (_values.yScaleSpecTimeMaxType === "auto") {
            yScaleSpecPropGroup.properties!.splice(
                yScaleSpecPropGroup.properties!.findIndex(prop => prop.key === "yScaleSpecTimeMaxValue"),
                1
            );
        }
    }

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
