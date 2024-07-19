/**
 * This file was generated from NivoLineChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export type AxisTopLegendPositionEnum = "start" | "middle" | "end";

export type AxisRightLegendPositionEnum = "start" | "middle" | "end";

export type AxisBottomLegendPositionEnum = "start" | "middle" | "end";

export type AxisLeftLegendPositionEnum = "start" | "middle" | "end";

export type XScaleSpecTypeEnum = "linear" | "log" | "symlog" | "point" | "band" | "time";

export type XScaleSpecFormatTypeEnum = "native" | "string";

export type XScaleSpecPrecisionEnum = "millisecond" | "second" | "minute" | "hour" | "day" | "month" | "year";

export type XScaleSpecMinTypeEnum = "auto" | "number";

export type XScaleSpecTimeMinTypeEnum = "auto" | "string";

export type XScaleSpecMaxTypeEnum = "auto" | "number";

export type XScaleSpecTimeMaxTypeEnum = "auto" | "string";

export type XScaleSpecNiceTypeEnum = "true" | "false" | "number";

export type YScaleSpecTypeEnum = "linear" | "log" | "symlog" | "point" | "band" | "time";

export type YScaleSpecFormatTypeEnum = "native" | "string";

export type YScaleSpecPrecisionEnum = "millisecond" | "second" | "minute" | "hour" | "day" | "month" | "year";

export type YScaleSpecMinTypeEnum = "auto" | "number";

export type YScaleSpecTimeMinTypeEnum = "auto" | "string";

export type YScaleSpecMaxTypeEnum = "auto" | "number";

export type YScaleSpecTimeMaxTypeEnum = "auto" | "string";

export type YScaleSpecNiceTypeEnum = "true" | "false" | "number";

export interface NivoLineChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    data: DynamicValue<string>;
    legends?: DynamicValue<string>;
    theme?: DynamicValue<string>;
    useMesh: boolean;
    enableCrosshair: boolean;
    enableTouchCrosshair: boolean;
    enableGridX: boolean;
    enableGridY: boolean;
    enablePointLabel: boolean;
    pointLabel?: DynamicValue<string>;
    pointLabelYOffset: string;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;
    enableAxisTop: boolean;
    axisTopTickSize: number;
    axisTopTickPadding: number;
    axisTopTickRotation: number;
    axisTopTickTruncateAt: number;
    axisTopLegend?: DynamicValue<string>;
    axisTopLegendOffset: number;
    axisTopLegendPosition: AxisTopLegendPositionEnum;
    enableAxisRight: boolean;
    axisRightTickSize: number;
    axisRightTickPadding: number;
    axisRightTickRotation: number;
    axisRightTickTruncateAt: number;
    axisRightLegend?: DynamicValue<string>;
    axisRightLegendOffset: number;
    axisRightLegendPosition: AxisRightLegendPositionEnum;
    enableAxisBottom: boolean;
    axisBottomTickSize: number;
    axisBottomTickPadding: number;
    axisBottomTickRotation: number;
    axisBottomTickTruncateAt: number;
    axisBottomLegend?: DynamicValue<string>;
    axisBottomLegendOffset: number;
    axisBottomLegendPosition: AxisBottomLegendPositionEnum;
    enableAxisLeft: boolean;
    axisLeftTickSize: number;
    axisLeftTickPadding: number;
    axisLeftTickRotation: number;
    axisLeftTickTruncateAt: number;
    axisLeftLegend?: DynamicValue<string>;
    axisLeftLegendOffset: number;
    axisLeftLegendPosition: AxisLeftLegendPositionEnum;
    xScaleSpecType: XScaleSpecTypeEnum;
    xScaleSpecBase: number;
    xScaleSpecConstant: number;
    xScaleSpecRound: boolean;
    xScaleSpecFormatType: XScaleSpecFormatTypeEnum;
    xScaleSpecFormatValue: string;
    xScaleSpecPrecision: XScaleSpecPrecisionEnum;
    xScaleSpecMinType: XScaleSpecMinTypeEnum;
    xScaleSpecMinValue: number;
    xScaleSpecTimeMinType: XScaleSpecTimeMinTypeEnum;
    xScaleSpecTimeMinValue: string;
    xScaleSpecMaxType: XScaleSpecMaxTypeEnum;
    xScaleSpecMaxValue: number;
    xScaleSpecTimeMaxType: XScaleSpecTimeMaxTypeEnum;
    xScaleSpecTimeMaxValue: string;
    xScaleSpecStacked: boolean;
    xScaleSpecReverse: boolean;
    xScaleSpecClamp: boolean;
    xScaleSpecUseUTC: boolean;
    xScaleSpecNiceType: XScaleSpecNiceTypeEnum;
    xScaleSpecNiceValue: number;
    xScaleSpecTimeNice: boolean;
    yScaleSpecType: YScaleSpecTypeEnum;
    yScaleSpecBase: number;
    yScaleSpecConstant: number;
    yScaleSpecRound: boolean;
    yScaleSpecFormatType: YScaleSpecFormatTypeEnum;
    yScaleSpecFormatValue: string;
    yScaleSpecPrecision: YScaleSpecPrecisionEnum;
    yScaleSpecMinType: YScaleSpecMinTypeEnum;
    yScaleSpecMinValue: number;
    yScaleSpecTimeMinType: YScaleSpecTimeMinTypeEnum;
    yScaleSpecTimeMinValue: string;
    yScaleSpecMaxType: YScaleSpecMaxTypeEnum;
    yScaleSpecMaxValue: number;
    yScaleSpecTimeMaxType: YScaleSpecTimeMaxTypeEnum;
    yScaleSpecTimeMaxValue: string;
    yScaleSpecStacked: boolean;
    yScaleSpecReverse: boolean;
    yScaleSpecClamp: boolean;
    yScaleSpecUseUTC: boolean;
    yScaleSpecNiceType: YScaleSpecNiceTypeEnum;
    yScaleSpecNiceValue: number;
    yScaleSpecTimeNice: boolean;
}

export interface NivoLineChartPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    data: string;
    legends: string;
    theme: string;
    useMesh: boolean;
    enableCrosshair: boolean;
    enableTouchCrosshair: boolean;
    enableGridX: boolean;
    enableGridY: boolean;
    enablePointLabel: boolean;
    pointLabel: string;
    pointLabelYOffset: string;
    marginTop: number | null;
    marginRight: number | null;
    marginBottom: number | null;
    marginLeft: number | null;
    enableAxisTop: boolean;
    axisTopTickSize: number | null;
    axisTopTickPadding: number | null;
    axisTopTickRotation: number | null;
    axisTopTickTruncateAt: number | null;
    axisTopLegend: string;
    axisTopLegendOffset: number | null;
    axisTopLegendPosition: AxisTopLegendPositionEnum;
    enableAxisRight: boolean;
    axisRightTickSize: number | null;
    axisRightTickPadding: number | null;
    axisRightTickRotation: number | null;
    axisRightTickTruncateAt: number | null;
    axisRightLegend: string;
    axisRightLegendOffset: number | null;
    axisRightLegendPosition: AxisRightLegendPositionEnum;
    enableAxisBottom: boolean;
    axisBottomTickSize: number | null;
    axisBottomTickPadding: number | null;
    axisBottomTickRotation: number | null;
    axisBottomTickTruncateAt: number | null;
    axisBottomLegend: string;
    axisBottomLegendOffset: number | null;
    axisBottomLegendPosition: AxisBottomLegendPositionEnum;
    enableAxisLeft: boolean;
    axisLeftTickSize: number | null;
    axisLeftTickPadding: number | null;
    axisLeftTickRotation: number | null;
    axisLeftTickTruncateAt: number | null;
    axisLeftLegend: string;
    axisLeftLegendOffset: number | null;
    axisLeftLegendPosition: AxisLeftLegendPositionEnum;
    xScaleSpecType: XScaleSpecTypeEnum;
    xScaleSpecBase: number | null;
    xScaleSpecConstant: number | null;
    xScaleSpecRound: boolean;
    xScaleSpecFormatType: XScaleSpecFormatTypeEnum;
    xScaleSpecFormatValue: string;
    xScaleSpecPrecision: XScaleSpecPrecisionEnum;
    xScaleSpecMinType: XScaleSpecMinTypeEnum;
    xScaleSpecMinValue: number | null;
    xScaleSpecTimeMinType: XScaleSpecTimeMinTypeEnum;
    xScaleSpecTimeMinValue: string;
    xScaleSpecMaxType: XScaleSpecMaxTypeEnum;
    xScaleSpecMaxValue: number | null;
    xScaleSpecTimeMaxType: XScaleSpecTimeMaxTypeEnum;
    xScaleSpecTimeMaxValue: string;
    xScaleSpecStacked: boolean;
    xScaleSpecReverse: boolean;
    xScaleSpecClamp: boolean;
    xScaleSpecUseUTC: boolean;
    xScaleSpecNiceType: XScaleSpecNiceTypeEnum;
    xScaleSpecNiceValue: number | null;
    xScaleSpecTimeNice: boolean;
    yScaleSpecType: YScaleSpecTypeEnum;
    yScaleSpecBase: number | null;
    yScaleSpecConstant: number | null;
    yScaleSpecRound: boolean;
    yScaleSpecFormatType: YScaleSpecFormatTypeEnum;
    yScaleSpecFormatValue: string;
    yScaleSpecPrecision: YScaleSpecPrecisionEnum;
    yScaleSpecMinType: YScaleSpecMinTypeEnum;
    yScaleSpecMinValue: number | null;
    yScaleSpecTimeMinType: YScaleSpecTimeMinTypeEnum;
    yScaleSpecTimeMinValue: string;
    yScaleSpecMaxType: YScaleSpecMaxTypeEnum;
    yScaleSpecMaxValue: number | null;
    yScaleSpecTimeMaxType: YScaleSpecTimeMaxTypeEnum;
    yScaleSpecTimeMaxValue: string;
    yScaleSpecStacked: boolean;
    yScaleSpecReverse: boolean;
    yScaleSpecClamp: boolean;
    yScaleSpecUseUTC: boolean;
    yScaleSpecNiceType: YScaleSpecNiceTypeEnum;
    yScaleSpecNiceValue: number | null;
    yScaleSpecTimeNice: boolean;
}
